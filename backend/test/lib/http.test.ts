import type { Response } from 'express'
import httpStatus from 'http-status'
import { sendNoContent, sendSuccess } from '../../src/lib/http'

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
  it('wraps the payload in a data envelope with a 200 by default', () => {
    const res = createResponse()

    sendSuccess(asResponse(res), { id: 'template-id' })

    expect(res.status).toHaveBeenCalledWith(httpStatus.OK)
    expect(res.json).toHaveBeenCalledWith({ data: { id: 'template-id' } })
  })

  it('honours an explicit status code', () => {
    const res = createResponse()

    sendSuccess(asResponse(res), { id: 'template-id' }, httpStatus.CREATED)

    expect(res.status).toHaveBeenCalledWith(httpStatus.CREATED)
    expect(res.json).toHaveBeenCalledWith({ data: { id: 'template-id' } })
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
