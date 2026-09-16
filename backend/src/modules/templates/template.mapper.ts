import type { Template, TemplateSummary } from '../../types/template'
import type { TemplateDocument } from '../../models/template.model'

export function toTemplate(document: TemplateDocument): Template {
  return {
    id: document._id.toString(),
    name: document.name,
    pages: document.pages,
    version: document.version,
    status: document.status,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}

export function toTemplateSummary(document: TemplateDocument): TemplateSummary {
  return {
    id: document._id.toString(),
    name: document.name,
    version: document.version,
    status: document.status,
    pageCount: document.pages.length,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
