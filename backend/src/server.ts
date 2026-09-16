import { env } from './config/env'
import { createApp } from './app'
import { connectWithRetry } from './lib/db-retry'
import { disconnectDatabase } from './config/db'

// Long enough to drain in-flight requests, short enough that the orchestrator's SIGKILL is never
// what ends the process — that would abandon the acks still in the pool.
const SHUTDOWN_TIMEOUT_MS = 10_000

async function bootstrap(): Promise<void> {
  await connectWithRetry()

  const app = createApp()

  const server = app.listen(env.PORT, () => {
    console.log(`🚀 API listening on http://localhost:${env.PORT}`)
  })

  // Node's defaults are 60 s / 5 s / 300 s. Set explicitly so the behaviour cannot change silently
  // with a Node upgrade, keeping headersTimeout above keepAliveTimeout so an idle keep-alive socket
  // is reclaimed before the connection counts as stuck.
  server.keepAliveTimeout = 61_000
  server.headersTimeout = 65_000
  server.requestTimeout = 30_000

  let shuttingDown = false

  const shutdown = async (signal: string): Promise<void> => {
    if (shuttingDown) return
    shuttingDown = true

    console.log(`🛑 ${signal} received, shutting down`)

    // Unref'd so the timer never keeps the process alive by itself, while still guaranteeing that a
    // socket wedged past the drain window cannot hold shutdown open forever.
    const forceExit = setTimeout(() => {
      console.error('⚠️ Shutdown did not finish in time, forcing exit')
      process.exit(1)
    }, SHUTDOWN_TIMEOUT_MS)
    forceExit.unref()

    try {
      const closed = new Promise<void>((resolve) => {
        server.close(() => {
          resolve()
        })
      })

      // server.close() also waits on idle keep-alive sockets, so without this a single idle client
      // would hold the process open until the timer above fires.
      server.closeIdleConnections()
      await closed

      // Exiting without this leaves pooled sockets to be killed by process.exit, abandoning their
      // in-flight writes.
      await disconnectDatabase()

      clearTimeout(forceExit)
      console.log('👋 Shutdown complete')
      process.exit(0)
    } catch (error: unknown) {
      console.error('❌ Shutdown failed:', error)
      process.exit(1)
    }
  }

  process.on('SIGINT', () => {
    void shutdown('SIGINT')
  })
  process.on('SIGTERM', () => {
    void shutdown('SIGTERM')
  })

  // The request that triggered this has already failed, so log it and keep serving.
  process.on('unhandledRejection', (reason: unknown) => {
    console.error('❌ Unhandled promise rejection:', reason)
  })

  // A rejection is recoverable, an uncaught exception is not: it can leave state inconsistent, so
  // route it into the same drain-and-exit path instead of continuing to serve traffic.
  process.on('uncaughtException', (error: unknown) => {
    console.error('❌ Uncaught exception:', error)
    void shutdown('uncaughtException')
  })
}

bootstrap().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown startup error'
  console.error('❌ Failed to start API:', message)
  process.exit(1)
})
