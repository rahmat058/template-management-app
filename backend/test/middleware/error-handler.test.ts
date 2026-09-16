import type { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import mongoose from 'mongoose'
import { z } from 'zod'
import { ConflictError, NotFoundError } from '../../src/lib/app-error'
import { errorHandler } from '../../src/middleware/error-handler'

let mockIsProduction = false

jest.mock('../../src/config/env', () => ({
  get isProduction() {
    return mockIsProduction
  },
}))

interface MockResponse {
  status: jest.Mock
  json: jest.Mock
  locals: Record<string, unknown>
}

function createResponse(locals: Record<string, unknown> = { requestId: 'req-1' }): MockResponse {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    locals,
  }
}

function asResponse(res: MockResponse): Response {
  return res as unknown as Response
}

function errorBody(res: MockResponse): { message: string; code: string; details?: unknown } {
  return res.json.mock.calls[0][0].error
}

function createZodError(): z.ZodError {
  const parsed = z.object({ name: z.string() }).safeParse({})

  if (parsed.success) {
    throw new Error('expected the schema to reject the input')
  }

  return parsed.error
}

const request = { method: 'POST', originalUrl: '/api/templates' } as Request
const next = jest.fn() as unknown as NextFunction

describe('errorHandler', () => {
  afterEach(() => {
    jest.restoreAllMocks()
    mockIsProduction = false
  })

  it('renders an AppError with its own status, code and details', () => {
    const res = createResponse()
    const error = new ConflictError('A template with this name already exists', { name: 'template1' })

    errorHandler(error, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.CONFLICT)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'A template with this name already exists',
        code: 'CONFLICT',
        details: { name: 'template1' },
      },
    })
  })

  it('keeps the subclass status of a NotFoundError', () => {
    const res = createResponse()

    errorHandler(new NotFoundError(), request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.NOT_FOUND)
  })

  it('renders a ZodError as a 400 validation error', () => {
    const res = createResponse()

    errorHandler(createZodError(), request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Request validation failed',
        code: 'VALIDATION_ERROR',
        details: expect.arrayContaining([expect.objectContaining({ path: ['name'] })]),
      },
    })
  })

  it('renders a mongoose CastError as an invalid identifier', () => {
    const res = createResponse()

    errorHandler(new mongoose.Error.CastError('ObjectId', 'bad-id', 'id'), request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Invalid identifier',
        code: 'INVALID_ID',
        details: { path: 'id' },
      },
    })
  })

  it('renders a mongoose ValidationError as a database validation failure', () => {
    const res = createResponse()
    const error = new mongoose.Error.ValidationError()
    error.addError('name', new mongoose.Error.ValidatorError({ message: 'Name is required', path: 'name' }))

    errorHandler(error, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Database validation failed',
        code: 'DB_VALIDATION_ERROR',
        details: error.errors,
      },
    })
  })

  it('hides the rejected values of a database validation failure in production', () => {
    mockIsProduction = true
    const res = createResponse()
    const error = new mongoose.Error.ValidationError()
    error.addError('name', new mongoose.Error.ValidatorError({ message: 'Name is required', path: 'name' }))

    errorHandler(error, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST)
    expect(errorBody(res).code).toBe('DB_VALIDATION_ERROR')
    expect(errorBody(res).details).toBeUndefined()
  })

  it('renders a duplicate key error as a conflict', () => {
    const res = createResponse()
    const duplicate = Object.assign(new Error('E11000 duplicate key error'), { code: 11000 })

    errorHandler(duplicate, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.CONFLICT)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'A template with this name already exists',
        code: 'DUPLICATE_KEY',
      },
    })
  })

  it('maps an oversized body to 413 instead of falling through to 500', () => {
    const res = createResponse()
    const tooLarge = Object.assign(new Error('request entity too large'), {
      status: httpStatus.REQUEST_ENTITY_TOO_LARGE,
      type: 'entity.too.large',
    })

    errorHandler(tooLarge, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.REQUEST_ENTITY_TOO_LARGE)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: { message: 'Request body is too large', code: 'PAYLOAD_TOO_LARGE' },
    })
  })

  it('maps a malformed JSON body to 400 instead of falling through to 500', () => {
    const res = createResponse()
    const malformed = Object.assign(new SyntaxError('Unexpected token'), { type: 'entity.parse.failed' })

    errorHandler(malformed, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: { message: 'Request body is not valid JSON', code: 'MALFORMED_JSON' },
    })
  })

  it('logs and exposes the message of an unknown error outside production', () => {
    const res = createResponse()
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    const unknown = Object.assign(new Error('database is on fire'), { name: 'MongoNetworkError' })

    errorHandler(unknown, request, asResponse(res), next)

    expect(consoleError).toHaveBeenCalledWith('❌ POST /api/templates [req-1]', unknown)
    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: { message: 'database is on fire', code: 'INTERNAL_ERROR' },
    })
  })

  it('still logs when the response carries no request id', () => {
    const res = createResponse({})
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    const unknown = new Error('nope')

    errorHandler(unknown, request, asResponse(res), next)

    expect(consoleError).toHaveBeenCalledWith('❌ POST /api/templates [-]', unknown)
  })

  it('falls back to a generic message for a thrown non-Error', () => {
    const res = createResponse()
    jest.spyOn(console, 'error').mockImplementation(() => {})

    errorHandler('boom', request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: { message: 'Unexpected server error', code: 'INTERNAL_ERROR' },
    })
  })

  it('masks the message of an unknown error in production', () => {
    mockIsProduction = true
    const res = createResponse()
    jest.spyOn(console, 'error').mockImplementation(() => {})

    errorHandler(new Error('connection string leaked'), request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: { message: 'Internal server error', code: 'INTERNAL_ERROR' },
    })
  })
})
