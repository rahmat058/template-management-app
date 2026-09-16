import { createTemplateSchema } from '../../src/validators/template.schema'
import { AUTOLOAD_TEMPLATE_NAME, defaultTemplates } from '../../src/seed/default-templates'

describe('defaultTemplates', () => {
  it('seeds at least one template', () => {
    expect(defaultTemplates.length).toBeGreaterThan(0)
  })

  it('uses the name the frontend autoload looks up', () => {
    expect(AUTOLOAD_TEMPLATE_NAME).toBe('template1')
    expect(defaultTemplates.map((template) => template.name)).toContain(AUTOLOAD_TEMPLATE_NAME)
  })

  it('seeds an A4 portrait page', () => {
    expect(defaultTemplates[0].pages[0]).toMatchObject({ width: 794, height: 1123 })
  })

  it('passes the same validation as POST /api/templates', () => {
    const invalid = defaultTemplates
      .map((template) => ({ name: template.name, result: createTemplateSchema.safeParse(template) }))
      .filter(({ result }) => !result.success)

    expect(invalid).toEqual([])
  })
})
