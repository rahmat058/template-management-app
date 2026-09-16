import { createTemplateSchema } from '../../src/validators/template.schema'

function createTextElement() {
  return {
    id: 'text-1',
    type: 'text',
    x: 0,
    y: 0,
    width: 100,
    height: 20,
    zIndex: 1,
    locked: false,
    visible: true,
    text: {
      content: 'Hello',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 400,
      color: '#000000',
      align: 'left',
    },
  }
}

function createTableElement(cellCount: number) {
  return {
    id: 'table-1',
    type: 'table',
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    zIndex: 1,
    locked: false,
    visible: true,
    table: {
      columns: 3,
      rows: [
        {
          id: 'row-1',
          cells: Array.from({ length: cellCount }, (_, index) => ({ id: `cell-${index}`, value: 'value' })),
        },
      ],
      borderWidth: 1,
      borderColor: '#000000',
      cellPadding: 8,
      rowSpacing: 0,
    },
  }
}

function createPage(elements: unknown[] = [createTextElement()]) {
  return {
    id: 'page-1',
    order: 0,
    width: 794,
    height: 1123,
    background: '#ffffff',
    elements,
  }
}

function createTemplate(overrides: Record<string, unknown> = {}) {
  return {
    name: 'template1',
    version: 1,
    status: 'active',
    pages: [createPage()],
    ...overrides,
  }
}

describe('createTemplateSchema', () => {
  it('accepts a valid template', () => {
    expect(createTemplateSchema.safeParse(createTemplate()).success).toBe(true)
  })

  it('defaults version to 1 and status to active', () => {
    const parsed = createTemplateSchema.parse({ name: 'template1', pages: [createPage()] })

    expect(parsed.version).toBe(1)
    expect(parsed.status).toBe('active')
  })

  it('trims the name', () => {
    expect(createTemplateSchema.parse(createTemplate({ name: '  template1  ' })).name).toBe('template1')
  })

  it('rejects a blank name', () => {
    expect(createTemplateSchema.safeParse(createTemplate({ name: '   ' })).success).toBe(false)
  })

  it('rejects a template without pages', () => {
    expect(createTemplateSchema.safeParse(createTemplate({ pages: [] })).success).toBe(false)
  })

  it('rejects a page with a non-positive element size', () => {
    const element = { ...createTextElement(), width: 0 }

    expect(createTemplateSchema.safeParse(createTemplate({ pages: [createPage([element])] })).success).toBe(false)
  })

  it('rejects an infinite element coordinate', () => {
    const element = { ...createTextElement(), x: Number.POSITIVE_INFINITY }

    expect(createTemplateSchema.safeParse(createTemplate({ pages: [createPage([element])] })).success).toBe(false)
  })

  it('rejects an unknown element type', () => {
    const element = { ...createTextElement(), type: 'video' }

    expect(createTemplateSchema.safeParse(createTemplate({ pages: [createPage([element])] })).success).toBe(false)
  })

  it('rejects an unknown status', () => {
    expect(createTemplateSchema.safeParse(createTemplate({ status: 'published' })).success).toBe(false)
  })

  it('rejects a table row whose cells do not match the column count', () => {
    const page = createPage([createTableElement(2)])

    expect(createTemplateSchema.safeParse(createTemplate({ pages: [page] })).success).toBe(false)
  })

  it('accepts a table row whose cells match the column count', () => {
    const page = createPage([createTableElement(3)])

    expect(createTemplateSchema.safeParse(createTemplate({ pages: [page] })).success).toBe(true)
  })
})
