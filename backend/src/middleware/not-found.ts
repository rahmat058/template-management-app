import type { Request, Response } from 'express'
import httpStatus from 'http-status'

export function notFoundHandler(req: Request, res: Response): void {
  res.status(httpStatus.NOT_FOUND).json({
    error: {
      message: `Route ${req.method} ${req.originalUrl} was not found`,
      code: 'ROUTE_NOT_FOUND',
    },
  })
}
