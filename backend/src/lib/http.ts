import type { Response } from 'express'
import httpStatus from 'http-status'
import type { ApiErrorBody, ApiErrorResponse, ApiSuccess } from '../types/api'

export function sendSuccess<T>(res: Response, data: T, statusCode: number = httpStatus.OK): void {
  const body: ApiSuccess<T> = { success: true, data }

  res.status(statusCode).json(body)
}

export function sendError(res: Response, statusCode: number, error: ApiErrorBody): void {
  const body: ApiErrorResponse = { success: false, error }

  res.status(statusCode).json(body)
}

export function sendNoContent(res: Response): void {
  res.status(httpStatus.NO_CONTENT).send()
}
