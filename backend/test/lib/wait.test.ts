import { wait } from '../../src/lib/wait'

describe('wait', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('resolves only once the requested delay has elapsed', async () => {
    let settled = false
    const delayed = wait(2_000).then(() => {
      settled = true
    })

    await jest.advanceTimersByTimeAsync(1_999)
    expect(settled).toBe(false)

    await jest.advanceTimersByTimeAsync(1)
    await delayed

    expect(settled).toBe(true)
  })
})
