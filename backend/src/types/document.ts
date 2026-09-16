import type { DocumentElement } from './element'

export interface Page {
  id: string
  order: number
  width: number
  height: number
  background: string
  elements: DocumentElement[]
}
