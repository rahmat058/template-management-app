import { randomUUID } from 'node:crypto'
import type { NextFunction, Request, Response } from 'express'

export const REQUEST_ID_HEADER = 'X-Request-Id'
const SAFE_REQUEST_ID = /^[A-Za-z0-9._-]{1,128}$/

// Accepts a caller-supplied id so a request can be traced across services, but only if it is a
// safe token — an arbitrary header value must never reach the logs unchecked.
export function requestId(req: Request, res: Response, next: NextFunction): void {
  const incoming = req.get(REQUEST_ID_HEADER)
  const id = incoming && SAFE_REQUEST_ID.test(incoming) ? incoming : randomUUID()

  res.locals.requestId = id
  res.setHeader(REQUEST_ID_HEADER, id)
  next()
}

export function requestIdOf(res: unknown): string {
  const locals = (res as { locals?: Record<string, unknown> }).locals
  const id = locals?.requestId

  return typeof id === 'string' ? id : '-'
}
