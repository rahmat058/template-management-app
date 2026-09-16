import { assertNoDuplicateNames, formatDuplicateNames } from '../../src/scripts/duplicate-names'

describe('formatDuplicateNames', () => {
  it('reports each name with its document count, sorted', () => {
    const formatted = formatDuplicateNames([
      { _id: 'template2', count: 3 },
      { _id: 'template1', count: 2 },
    ])

    expect(formatted).toBe('template1 (x2), template2 (x3)')
  })
})

describe('assertNoDuplicateNames', () => {
  it('accepts an empty result', () => {
    expect(() => {
      assertNoDuplicateNames([])
    }).not.toThrow()
  })

  it('aborts and names every offending template', () => {
    expect(() => {
      assertNoDuplicateNames([
        { _id: 'template1', count: 2 },
        { _id: 'template3', count: 4 },
      ])
    }).toThrow(/template1 \(x2\), template3 \(x4\)/)
  })

  it('reports how many names collide', () => {
    expect(() => {
      assertNoDuplicateNames([{ _id: 'template1', count: 2 }])
    }).toThrow(/1 duplicated name\(s\)/)
  })
})
