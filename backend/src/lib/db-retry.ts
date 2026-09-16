import { connectDatabase } from '../config/db'
import { wait } from './wait'

export async function connectWithRetry(): Promise<void> {
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
