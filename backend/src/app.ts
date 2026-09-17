import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'
import rateLimit from 'express-rate-limit'

import { env } from './config/env'
import { PRODUCTION_LOG_FORMAT, REQUEST_LOG_FORMAT } from './lib/log-format'
import { apiRouter } from './routes'
import { errorHandler } from './middleware/error-handler'
import { notFoundHandler } from './middleware/not-found'
import { REQUEST_ID_HEADER, requestId, requestIdOf } from './middleware/request-id'

export function createApp() {
  const app = express()

  app.disable('x-powered-by')
  // Needed for correct client IPs (and therefore correct rate limiting and logs) behind a proxy.
  app.set('trust proxy', env.TRUST_PROXY)
  app.use(helmet())
  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: [REQUEST_ID_HEADER],
      maxAge: 86_400,
    }),
  )
  app.use(requestId)
  app.use(compression())
  // Ahead of the body parsers so a request is counted before the server parses up to 2 MB for it.
  // Health checks are skipped so load-balancer probes do not consume the shared quota.
  app.use(
    rateLimit({
      windowMs: 60_000,
      limit: 120,
      standardHeaders: true,
      legacyHeaders: false,
      skip: (req) => req.path === '/api/health',
    }),
  )
  app.use(express.json({ limit: '2mb' }))
  app.use(express.urlencoded({ extended: false }))

  if (env.NODE_ENV !== 'test') {
    morgan.token('requestId', (_req, res) => requestIdOf(res))
    app.use(morgan(env.NODE_ENV === 'production' ? PRODUCTION_LOG_FORMAT : REQUEST_LOG_FORMAT))
  }

  app.use('/api', apiRouter)
  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
