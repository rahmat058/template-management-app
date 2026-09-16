import mongoose from 'mongoose'
import { env, isProduction } from './env'
import { setDefaultResultOrder, setServers } from 'node:dns'

setServers(['8.8.8.8', '1.1.1.1'])
setDefaultResultOrder('ipv4first')

export async function connectDatabase(): Promise<void> {
  mongoose.set('strictQuery', true)
  // In production the indexes are built by `npm run indexes`, so a large collection is never
  // indexed during request-serving startup (and a duplicate-name clash cannot block boot).
  mongoose.set('autoIndex', !isProduction)

  await mongoose.connect(env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10_000,
    connectTimeoutMS: 10_000,
    socketTimeoutMS: 45_000,
    maxPoolSize: 10,
    minPoolSize: 5,
    maxIdleTimeMS: 60_000,
    family: 4,
  })
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect()
}

export function isDatabaseConnected(): boolean {
  return mongoose.connection.readyState === 1
}

export function databaseName(): string {
  return mongoose.connection.name
}
