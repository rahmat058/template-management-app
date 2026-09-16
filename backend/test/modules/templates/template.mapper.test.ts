import type { Page } from '../../../src/types/document'
import type { TemplateRecord, TemplateSummaryRecord } from '../../../src/modules/templates/template.mapper'
import { toTemplate, toTemplateSummary } from '../../../src/modules/templates/template.mapper'

const pages: Page[] = [
  { id: 'page-1', order: 0, width: 794, height: 1123, background: '#ffffff', elements: [] },
  { id: 'page-2', order: 1, width: 794, height: 1123, background: '#ffffff', elements: [] },
]

function createRecord(overrides: Partial<TemplateRecord> = {}): TemplateRecord {
  return {
    _id: { toString: () => 'template-id' },
    name: 'template1',
    pages,
    version: 3,
    status: 'active',
    createdAt: new Date('2026-09-16T20:00:00.000Z'),
    updatedAt: new Date('2026-09-16T20:15:00.000Z'),
    ...overrides,
  }
}

// The aggregation behind the list endpoint returns `pageCount` and no `pages` at all, so the
// summary mapper must not touch the array.
function createSummaryRecord(overrides: Partial<TemplateSummaryRecord> = {}): TemplateSummaryRecord {
  return {
    _id: { toString: () => 'template-id' },
    name: 'template1',
    version: 3,
    status: 'active',
    pageCount: 2,
    createdAt: new Date('2026-09-16T20:00:00.000Z'),
    updatedAt: new Date('2026-09-16T20:15:00.000Z'),
    ...overrides,
  }
}

describe('toTemplate', () => {
  it('maps the record id and serialises the timestamps', () => {
    const template = toTemplate(createRecord())

    expect(template).toEqual({
      id: 'template-id',
      name: 'template1',
      pages,
      version: 3,
      status: 'active',
      createdAt: '2026-09-16T20:00:00.000Z',
      updatedAt: '2026-09-16T20:15:00.000Z',
    })
  })

  it('does not leak the internal _id field', () => {
    expect('_id' in toTemplate(createRecord())).toBe(false)
  })
})

describe('toTemplateSummary', () => {
  it('reports the page count instead of the pages themselves', () => {
    const summary = toTemplateSummary(createSummaryRecord())

    expect(summary).toEqual({
      id: 'template-id',
      name: 'template1',
      version: 3,
      status: 'active',
      pageCount: 2,
      createdAt: '2026-09-16T20:00:00.000Z',
      updatedAt: '2026-09-16T20:15:00.000Z',
    })
    expect('pages' in summary).toBe(false)
  })

  it('maps a record that carries no pages array at all', () => {
    const summary = toTemplateSummary(createSummaryRecord({ pageCount: 0 }))

    expect(summary.pageCount).toBe(0)
    expect('pages' in summary).toBe(false)
  })
})
