import type { NextFunction, Request, Response } from 'express'
import { ZodError, type ZodType } from 'zod'
import { ValidationError } from '../lib/app-error'

interface RequestSchema {
  body?: ZodType
  params?: ZodType
  query?: ZodType
}

export function validateRequest(schema: RequestSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      if (schema.body) {
        req.body = schema.body.parse(req.body)
      }

      if (schema.params) {
        req.params = schema.params.parse(req.params) as Request['params']
      }

      if (schema.query) {
        req.query = schema.query.parse(req.query) as Request['query']
      }

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        next(new ValidationError('Request validation failed', error.issues))
        return
      }

      next(error)
    }
  }
}
