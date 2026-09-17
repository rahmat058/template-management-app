import { requestLogger } from '../../src/lib/request-logger'

describe('requestLogger', () => {
  it('is off under test so the suite output stays readable', () => {
    expect(requestLogger('test')).toBeNull()
  })

  it('returns middleware for the environments that log requests', () => {
    expect(typeof requestLogger('development')).toBe('function')
    expect(typeof requestLogger('production')).toBe('function')
  })
})
