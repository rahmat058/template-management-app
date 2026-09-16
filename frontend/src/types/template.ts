import type { Page } from '@/types/document'

export const TEMPLATE_STATUSES = ['draft', 'active', 'archived'] as const

export type TemplateStatus = (typeof TEMPLATE_STATUSES)[number]

export interface Template {
  id: string
  name: string
  pages: Page[]
  version: number
  status: TemplateStatus
  createdAt: string
  updatedAt: string
}

export interface TemplateSummary {
  id: string
  name: string
  version: number
  status: TemplateStatus
  pageCount: number
  createdAt: string
  updatedAt: string
}

export interface CreateTemplateInput {
  name: string
  pages: Page[]
  version?: number
  status?: TemplateStatus
}

export interface UpdateTemplateInput {
  name?: string
  pages?: Page[]
  version?: number
  status?: TemplateStatus
}
