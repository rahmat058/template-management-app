import type { Page } from '../../../src/types/document'
import type { TemplateDocument } from '../../../src/models/template.model'
import { toTemplate, toTemplateSummary } from '../../../src/modules/templates/template.mapper'

const pages: Page[] = [
  { id: 'page-1', order: 0, width: 794, height: 1123, background: '#ffffff', elements: [] },
  { id: 'page-2', order: 1, width: 794, height: 1123, background: '#ffffff', elements: [] },
]

function createDocument(overrides: Partial<TemplateDocument> = {}): TemplateDocument {
  return {
    _id: { toString: () => 'template-id' },
    name: 'template1',
    pages,
    version: 3,
    status: 'active',
    createdAt: new Date('2026-09-16T20:00:00.000Z'),
    updatedAt: new Date('2026-09-16T20:15:00.000Z'),
    ...overrides,
  } as unknown as TemplateDocument
}

describe('toTemplate', () => {
  it('maps the document id and serialises the timestamps', () => {
    const template = toTemplate(createDocument())

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
    expect('_id' in toTemplate(createDocument())).toBe(false)
  })
})

describe('toTemplateSummary', () => {
  it('reports the page count instead of the pages themselves', () => {
    const summary = toTemplateSummary(createDocument())

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
})
