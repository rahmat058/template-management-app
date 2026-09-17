import { PRODUCTION_LOG_FORMAT, REQUEST_LOG_FORMAT } from '../../src/lib/log-format'

describe('log formats', () => {
  it('appends the request id to the base format', () => {
    expect(REQUEST_LOG_FORMAT).toContain('[ :requestId ]')
  })

  it('extends the base format with the client IP in production', () => {
    expect(PRODUCTION_LOG_FORMAT).toContain(REQUEST_LOG_FORMAT)
    expect(PRODUCTION_LOG_FORMAT.startsWith(':remote-addr ')).toBe(true)
  })

  // The request id token is only registered when NODE_ENV !== 'test'; if it were ever dropped from
  // the format, morgan would silently render a literal `undefined` instead of failing.
  it('keeps the request id in both formats', () => {
    expect(PRODUCTION_LOG_FORMAT).toContain(':requestId')
  })
})
