import type { DocumentElement } from '@/types/element'

export const A4_PORTRAIT = {
  width: 794,
  height: 1123,
} as const

export const DOCUMENT_VERSION = 1

export interface Page {
  id: string
  order: number
  width: number
  height: number
  background: string
  elements: DocumentElement[]
}
