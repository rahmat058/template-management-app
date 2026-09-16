import httpStatus from 'http-status'
import { AppError, ConflictError, NotFoundError, ValidationError } from '../../src/lib/app-error'

describe('AppError', () => {
  it('carries the status, code, details and operational flag', () => {
    const error = new AppError(httpStatus.BAD_GATEWAY, 'Upstream failed', 'UPSTREAM', { retry: true })

    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('AppError')
    expect(error.message).toBe('Upstream failed')
    expect(error.statusCode).toBe(502)
    expect(error.code).toBe('UPSTREAM')
    expect(error.details).toEqual({ retry: true })
    expect(error.isOperational).toBe(true)
  })

  it('defaults to an internal error code', () => {
    expect(new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'Boom').code).toBe('INTERNAL_ERROR')
  })
})

describe('AppError subclasses', () => {
  it('maps NotFoundError to 404 / NOT_FOUND', () => {
    const error = new NotFoundError()

    expect(error.statusCode).toBe(httpStatus.NOT_FOUND)
    expect(error.code).toBe('NOT_FOUND')
    expect(error.message).toBe('Resource not found')
  })

  it('maps ValidationError to 400 / VALIDATION_ERROR', () => {
    const error = new ValidationError('Bad input', ['name'])

    expect(error.statusCode).toBe(httpStatus.BAD_REQUEST)
    expect(error.code).toBe('VALIDATION_ERROR')
    expect(error.message).toBe('Bad input')
    expect(error.details).toEqual(['name'])
  })

  it('maps ConflictError to 409 / CONFLICT', () => {
    const error = new ConflictError()

    expect(error.statusCode).toBe(httpStatus.CONFLICT)
    expect(error.code).toBe('CONFLICT')
    expect(error.message).toBe('Resource already exists')
  })
})
