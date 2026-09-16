export type ResizeHandle = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w'

export const MIN_ELEMENT_SIZE = 24

export interface ElementBox {
  x: number
  y: number
  width: number
  height: number
}

export function applyResize(
  start: ElementBox,
  handle: ResizeHandle,
  deltaX: number,
  deltaY: number,
  pageWidth: number,
  pageHeight: number,
  minSize = MIN_ELEMENT_SIZE,
): ElementBox {
  let { x, y, width, height } = start

  const affectsLeft = handle === 'nw' || handle === 'w' || handle === 'sw'
  const affectsRight = handle === 'ne' || handle === 'e' || handle === 'se'
  const affectsTop = handle === 'nw' || handle === 'n' || handle === 'ne'
  const affectsBottom = handle === 'sw' || handle === 's' || handle === 'se'

  if (affectsRight) {
    width = start.width + deltaX
  }

  if (affectsLeft) {
    width = start.width - deltaX
    x = start.x + deltaX
  }

  if (affectsBottom) {
    height = start.height + deltaY
  }

  if (affectsTop) {
    height = start.height - deltaY
    y = start.y + deltaY
  }

  if (width < minSize) {
    if (affectsLeft) {
      x = start.x + start.width - minSize
    }
    width = minSize
  }

  if (height < minSize) {
    if (affectsTop) {
      y = start.y + start.height - minSize
    }
    height = minSize
  }

  if (x < 0) {
    width += x
    x = 0
  }

  if (y < 0) {
    height += y
    y = 0
  }

  if (x + width > pageWidth) {
    width = pageWidth - x
  }

  if (y + height > pageHeight) {
    height = pageHeight - y
  }

  return {
    x: Math.round(Math.max(0, x)),
    y: Math.round(Math.max(0, y)),
    width: Math.round(Math.max(minSize, width)),
    height: Math.round(Math.max(minSize, height)),
  }
}

export function resizeCursor(handle: ResizeHandle): string {
  switch (handle) {
    case 'n':
    case 's':
      return 'ns-resize'
    case 'e':
    case 'w':
      return 'ew-resize'
    case 'ne':
    case 'sw':
      return 'nesw-resize'
    case 'nw':
    case 'se':
      return 'nwse-resize'
  }
}
