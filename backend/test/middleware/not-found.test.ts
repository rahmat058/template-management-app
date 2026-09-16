import type { Request, Response } from 'express'
import httpStatus from 'http-status'
import { notFoundHandler } from '../../src/middleware/not-found'

describe('notFoundHandler', () => {
  it('responds with 404 and the requested route in the message', () => {
    const req = { method: 'PATCH', originalUrl: '/api/templates/unknown' } as Request
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    }

    notFoundHandler(req, res as unknown as Response)

    expect(res.status).toHaveBeenCalledWith(httpStatus.NOT_FOUND)
    expect(res.json).toHaveBeenCalledWith({
      error: {
        message: 'Route PATCH /api/templates/unknown was not found',
        code: 'ROUTE_NOT_FOUND',
      },
    })
  })
})
