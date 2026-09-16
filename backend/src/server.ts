import { connectDatabase } from './config/db'
import { env } from './config/env'
import { createApp } from './app'

async function connectWithRetry(): Promise<void> {
  const maxAttempts = 8

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await connectDatabase()
      console.log('🔌 Connected to MongoDB')
      return
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown database error'
      console.error(`⚠️ MongoDB connection attempt ${attempt}/${maxAttempts} failed: ${message}`)

      if (attempt === maxAttempts) {
        throw error
      }

      await wait(2_000 * attempt)
    }
  }
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

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
