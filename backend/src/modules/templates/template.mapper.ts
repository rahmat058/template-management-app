import type { Page } from '../../types/document'
import type { Template, TemplateStatus, TemplateSummary } from '../../types/template'

// Plain structural shapes rather than Mongoose documents: every read path uses `.lean()`, so the
// mapper receives deserialised objects, and the list path receives an aggregation result that
// carries a computed `pageCount` instead of a `pages` array.
export interface TemplateRecord {
  _id: { toString(): string }
  name: string
  pages: Page[]
  version: number
  status: TemplateStatus
  createdAt: Date
  updatedAt: Date
}

export interface TemplateSummaryRecord {
  _id: { toString(): string }
  name: string
  version: number
  status: TemplateStatus
  pageCount: number
  createdAt: Date
  updatedAt: Date
}

export function toTemplate(document: TemplateRecord): Template {
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

export function toTemplateSummary(document: TemplateSummaryRecord): TemplateSummary {
  return {
    id: document._id.toString(),
    name: document.name,
    version: document.version,
    status: document.status,
    pageCount: document.pageCount,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  }
}
