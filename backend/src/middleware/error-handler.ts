import type { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { ZodError } from 'zod'
import { isProduction } from '../config/env'
import { AppError } from '../lib/app-error'
import { sendError } from '../lib/http'
import { requestIdOf } from './request-id'

interface BodyParserError {
  status?: number
  statusCode?: number
  type?: string
}

export function errorHandler(error: unknown, req: Request, res: Response, _next: NextFunction): void {
  if (error instanceof AppError) {
    sendError(res, error.statusCode, {
      message: error.message,
      code: error.code,
      details: error.details,
    })
    return
  }

  if (error instanceof ZodError) {
    sendError(res, httpStatus.BAD_REQUEST, {
      message: 'Request validation failed',
      code: 'VALIDATION_ERROR',
      details: error.issues,
    })
    return
  }

  if (error instanceof mongoose.Error.CastError) {
    sendError(res, httpStatus.BAD_REQUEST, {
      message: 'Invalid identifier',
      code: 'INVALID_ID',
      details: { path: error.path },
    })
    return
  }

  if (error instanceof mongoose.Error.ValidationError) {
    sendError(res, httpStatus.BAD_REQUEST, {
      message: 'Database validation failed',
      code: 'DB_VALIDATION_ERROR',
      // These errors echo the rejected values, so keep them out of production responses.
      details: isProduction ? undefined : error.errors,
    })
    return
  }

  // express.json() rejects oversized and malformed bodies before any route runs. Without this the
  // client sees a 500 and cannot tell a bad request from a server fault.
  const bodyParserError = error as BodyParserError
  const bodyParserStatus = bodyParserError.status ?? bodyParserError.statusCode

  if (bodyParserStatus === httpStatus.REQUEST_ENTITY_TOO_LARGE) {
    sendError(res, httpStatus.REQUEST_ENTITY_TOO_LARGE, {
      message: 'Request body is too large',
      code: 'PAYLOAD_TOO_LARGE',
    })
    return
  }

  if (bodyParserError.type === 'entity.parse.failed') {
    sendError(res, httpStatus.BAD_REQUEST, {
      message: 'Request body is not valid JSON',
      code: 'MALFORMED_JSON',
    })
    return
  }

  const mongoError = error as { code?: number }
  if (mongoError.code === 11000) {
    sendError(res, httpStatus.CONFLICT, {
      message: 'A template with this name already exists',
      code: 'DUPLICATE_KEY',
    })
    return
  }

  const message = error instanceof Error ? error.message : 'Unexpected server error'

  console.error(`❌ ${req.method} ${req.originalUrl} [${requestIdOf(res)}]`, error)

  sendError(res, httpStatus.INTERNAL_SERVER_ERROR, {
    message: isProduction ? 'Internal server error' : message,
    code: 'INTERNAL_ERROR',
  })
}
