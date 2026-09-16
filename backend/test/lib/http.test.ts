import type { Response } from 'express'
import httpStatus from 'http-status'
import { sendError, sendNoContent, sendSuccess } from '../../src/lib/http'

interface MockResponse {
  status: jest.Mock
  json: jest.Mock
  send: jest.Mock
}

function createResponse(): MockResponse {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  }
}

function asResponse(res: MockResponse): Response {
  return res as unknown as Response
}

describe('sendSuccess', () => {
  it('wraps the payload in a success envelope with a 200 by default', () => {
    const res = createResponse()

    sendSuccess(asResponse(res), { id: 'template-id' })

    expect(res.status).toHaveBeenCalledWith(httpStatus.OK)
    expect(res.json).toHaveBeenCalledWith({ success: true, data: { id: 'template-id' } })
  })

  it('honours an explicit status code', () => {
    const res = createResponse()

    sendSuccess(asResponse(res), { id: 'template-id' }, httpStatus.CREATED)

    expect(res.status).toHaveBeenCalledWith(httpStatus.CREATED)
    expect(res.json).toHaveBeenCalledWith({ success: true, data: { id: 'template-id' } })
  })
})

describe('sendError', () => {
  it('wraps the failure in an error envelope with the given status', () => {
    const res = createResponse()

    sendError(asResponse(res), httpStatus.NOT_FOUND, { message: 'Resource not found', code: 'NOT_FOUND' })

    expect(res.status).toHaveBeenCalledWith(httpStatus.NOT_FOUND)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: { message: 'Resource not found', code: 'NOT_FOUND' },
    })
  })

  it('passes details through untouched', () => {
    const res = createResponse()

    sendError(asResponse(res), httpStatus.BAD_REQUEST, {
      message: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details: [{ path: ['name'], message: 'Required' }],
    })

    expect(res.status).toHaveBeenCalledWith(httpStatus.BAD_REQUEST)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: {
        message: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: [{ path: ['name'], message: 'Required' }],
      },
    })
  })
})

describe('sendNoContent', () => {
  it('responds with 204 and an empty body', () => {
    const res = createResponse()

    sendNoContent(asResponse(res))

    expect(res.status).toHaveBeenCalledWith(httpStatus.NO_CONTENT)
    expect(res.send).toHaveBeenCalledWith()
    expect(res.json).not.toHaveBeenCalled()
  })
})
