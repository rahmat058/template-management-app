import type { Request, Response } from 'express'
import httpStatus from 'http-status'
import { sendError } from '../lib/http'

export function notFoundHandler(req: Request, res: Response): void {
  sendError(res, httpStatus.NOT_FOUND, {
    message: `Route ${req.method} ${req.originalUrl} was not found`,
    code: 'ROUTE_NOT_FOUND',
  })
}
