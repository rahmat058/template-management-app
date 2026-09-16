import { env } from './config/env'
import { createApp } from './app'
import { connectWithRetry } from './lib/db-retry'

async function bootstrap(): Promise<void> {
  await connectWithRetry()

  const app = createApp()

  const server = app.listen(env.PORT, () => {
    console.log(`🚀 API listening on http://localhost:${env.PORT}`)
  })

  const shutdown = (signal: string): void => {
    console.log(`🛑 ${signal} received, shutting down`)
    server.close(() => {
      process.exit(0)
    })
  }

  process.on('SIGINT', () => {
    shutdown('SIGINT')
  })
  process.on('SIGTERM', () => {
    shutdown('SIGTERM')
  })
}

bootstrap().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown startup error'
  console.error('❌ Failed to start API:', message)
  process.exit(1)
})
