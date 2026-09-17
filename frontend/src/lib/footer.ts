import type { Page } from '@/types/document'
import { cloneElement } from '@/lib/document-utils'
import type { DocumentElement } from '@/types/element'

// A footer is whatever starts in the last 150px of the page, so a redesigned footer is picked up
// without a hard-coded element list. Top edge, not overlap: content that only reaches into the band
// is still content.
export const FOOTER_BAND_HEIGHT = 150

export function isFooterElement(element: DocumentElement, pageHeight: number): boolean {
  return element.y >= pageHeight - FOOTER_BAND_HEIGHT
}

export function footerElementsForNewPage(page: Page): DocumentElement[] {
  return page.elements.filter((element) => isFooterElement(element, page.height)).map(cloneElement)
}
