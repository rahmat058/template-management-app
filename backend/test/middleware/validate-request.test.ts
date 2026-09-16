import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import { ValidationError } from '../../src/lib/app-error'
import { validateRequest } from '../../src/middleware/validate-request'

const response = {} as Response

function createNext(): { next: NextFunction; spy: jest.Mock } {
  const spy = jest.fn()

  return { next: spy as unknown as NextFunction, spy }
}

function createRequest(overrides: Partial<Request> = {}): Request {
  return { body: {}, params: {}, query: {}, ...overrides } as unknown as Request
}

describe('validateRequest', () => {
  it('replaces the body with the parsed value', () => {
    const req = createRequest({ body: { name: '  template1  ' } })
    const { next, spy } = createNext()

    validateRequest({ body: z.object({ name: z.string().trim() }) })(req, response, next)

    expect(req.body).toEqual({ name: 'template1' })
    expect(spy).toHaveBeenCalledWith()
  })

  it('parses params when a params schema is provided', () => {
    const req = createRequest({ params: { id: '507f1f77bcf86cd799439011' } as Request['params'] })
    const { next, spy } = createNext()

    validateRequest({ params: z.object({ id: z.string().regex(/^[a-f0-9]{24}$/i) }) })(req, response, next)

    expect(req.params).toEqual({ id: '507f1f77bcf86cd799439011' })
    expect(spy).toHaveBeenCalledWith()
  })

  it('parses query when a query schema is provided', () => {
    const req = createRequest({ query: { limit: '10' } as unknown as Request['query'] })
    const { next, spy } = createNext()

    validateRequest({ query: z.object({ limit: z.coerce.number().int() }) })(req, response, next)

    expect(req.query).toEqual({ limit: 10 })
    expect(spy).toHaveBeenCalledWith()
  })

  it('leaves sections without a schema untouched', () => {
    const req = createRequest({ body: { name: 'template1' }, params: { id: 'raw' } as Request['params'] })
    const { next } = createNext()

    validateRequest({ body: z.object({ name: z.string() }) })(req, response, next)

    expect(req.params).toEqual({ id: 'raw' })
  })

  it('converts a Zod failure into a ValidationError', () => {
    const req = createRequest({ body: { name: 42 } })
    const { next, spy } = createNext()

    validateRequest({ body: z.object({ name: z.string() }) })(req, response, next)

    const error: unknown = spy.mock.calls[0][0]
    if (!(error instanceof ValidationError)) {
      throw new Error('expected a ValidationError')
    }

    expect(error.message).toBe('Request validation failed')
    expect(error.details).toEqual(expect.arrayContaining([expect.objectContaining({ path: ['name'] })]))
  })

  it('forwards an unexpected error unchanged', () => {
    const failure = new Error('schema exploded')
    const req = createRequest()
    const { next, spy } = createNext()
    const brokenSchema = {
      parse: () => {
        throw failure
      },
    } as unknown as z.ZodType

    validateRequest({ body: brokenSchema })(req, response, next)

    expect(spy).toHaveBeenCalledWith(failure)
  })
})
