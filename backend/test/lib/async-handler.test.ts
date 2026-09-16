import type { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '../../src/lib/async-handler'

const request = {} as Request
const response = {} as Response

function createNext(): { next: NextFunction; spy: jest.Mock } {
  const spy = jest.fn()

  return { next: spy as unknown as NextFunction, spy }
}

function flushPromises(): Promise<void> {
  return new Promise((resolve) => setImmediate(resolve))
}

describe('asyncHandler', () => {
  it('does not call next when the handler resolves', async () => {
    const { next, spy } = createNext()
    const handler = asyncHandler(async () => {})

    handler(request, response, next)
    await flushPromises()

    expect(spy).not.toHaveBeenCalled()
  })

  it('forwards a rejected handler to next', async () => {
    const error = new Error('boom')
    const { next, spy } = createNext()
    const handler = asyncHandler(async () => {
      throw error
    })

    handler(request, response, next)
    await flushPromises()

    expect(spy).toHaveBeenCalledWith(error)
  })

  it('returns before the promise settles', () => {
    let settled = false
    const { next } = createNext()
    const handler = asyncHandler(async () => {
      await Promise.resolve()
      settled = true
    })

    const result = handler(request, response, next)

    expect(result).toBeUndefined()
    expect(settled).toBe(false)
  })
})
