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
}

function createResponse(): MockResponse {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  }
}

function asResponse(res: MockResponse): Response {
  return res as unknown as Response
}

function createZodError(): z.ZodError {
  const parsed = z.object({ name: z.string() }).safeParse({})

  if (parsed.success) {
    throw new Error('expected the schema to reject the input')
  }

  return parsed.error
}

const request = {} as Request
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
      error: {
        message: 'Database validation failed',
        code: 'DB_VALIDATION_ERROR',
        details: error.errors,
      },
    })
  })

  it('renders a duplicate key error as a conflict', () => {
    const res = createResponse()
    const duplicate = Object.assign(new Error('E11000 duplicate key error'), { code: 11000 })

    errorHandler(duplicate, request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.CONFLICT)
    expect(res.json).toHaveBeenCalledWith({
      error: {
        message: 'A template with this name already exists',
        code: 'DUPLICATE_KEY',
      },
    })
  })

  it('logs and exposes the message of an unknown error outside production', () => {
    const res = createResponse()
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    const unknown = Object.assign(new Error('database is on fire'), { name: 'MongoNetworkError' })

    errorHandler(unknown, request, asResponse(res), next)

    expect(consoleError).toHaveBeenCalledWith(unknown)
    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.json).toHaveBeenCalledWith({
      error: { message: 'database is on fire', code: 'INTERNAL_ERROR' },
    })
  })

  it('falls back to a generic message for a thrown non-Error', () => {
    const res = createResponse()
    jest.spyOn(console, 'error').mockImplementation(() => {})

    errorHandler('boom', request, asResponse(res), next)

    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR)
    expect(res.json).toHaveBeenCalledWith({
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
      error: { message: 'Internal server error', code: 'INTERNAL_ERROR' },
    })
  })
})
