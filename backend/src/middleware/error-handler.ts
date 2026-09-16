import type { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { ZodError } from 'zod'
import { isProduction } from '../config/env'
import { AppError } from '../lib/app-error'
import { sendError } from '../lib/http'

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction): void {
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
      details: error.errors,
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

  console.error(error)

  sendError(res, httpStatus.INTERNAL_SERVER_ERROR, {
    message: isProduction ? 'Internal server error' : message,
    code: 'INTERNAL_ERROR',
  })
}
