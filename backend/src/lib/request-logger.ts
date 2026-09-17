import morgan from 'morgan'
import type { RequestHandler } from 'express'
import { requestIdOf } from '../middleware/request-id'
import { PRODUCTION_LOG_FORMAT, REQUEST_LOG_FORMAT } from './log-format'

type LogEnvironment = 'development' | 'test' | 'production'

// Returns the request logger for an environment, or null under test so the suite output stays readable.
export function requestLogger(environment: LogEnvironment): RequestHandler | null {
  if (environment === 'test') {
    return null
  }

  morgan.token('requestId', (_req, res) => requestIdOf(res))

  return morgan(environment === 'production' ? PRODUCTION_LOG_FORMAT : REQUEST_LOG_FORMAT)
}
