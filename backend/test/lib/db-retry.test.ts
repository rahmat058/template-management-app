import { connectDatabase } from '../../src/config/db'
import { connectWithRetry } from '../../src/lib/db-retry'

jest.mock('../../src/config/db', () => ({
  connectDatabase: jest.fn(),
}))

const mockedConnectDatabase = connectDatabase as jest.MockedFunction<typeof connectDatabase>

describe('connectWithRetry', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    mockedConnectDatabase.mockReset()
    jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  it('resolves on the first successful connection without waiting', async () => {
    mockedConnectDatabase.mockResolvedValueOnce(undefined)

    await expect(connectWithRetry()).resolves.toBeUndefined()

    expect(mockedConnectDatabase).toHaveBeenCalledTimes(1)
  })

  it('backs off linearly between attempts until the connection succeeds', async () => {
    mockedConnectDatabase
      .mockRejectedValueOnce(new Error('ECONNREFUSED'))
      .mockRejectedValueOnce(new Error('ECONNREFUSED'))
      .mockResolvedValueOnce(undefined)

    const connection = connectWithRetry()

    await jest.advanceTimersByTimeAsync(2_000)
    expect(mockedConnectDatabase).toHaveBeenCalledTimes(2)

    await jest.advanceTimersByTimeAsync(4_000)
    await expect(connection).resolves.toBeUndefined()

    expect(mockedConnectDatabase).toHaveBeenCalledTimes(3)
  })

  it('rejects with the last failure once every attempt is spent', async () => {
    mockedConnectDatabase.mockRejectedValue(new Error('ECONNREFUSED'))

    const connection = connectWithRetry()
    const assertion = expect(connection).rejects.toThrow('ECONNREFUSED')

    await jest.runAllTimersAsync()

    await assertion
    expect(mockedConnectDatabase).toHaveBeenCalledTimes(8)
  })
})
