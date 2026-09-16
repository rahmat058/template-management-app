'use client'

import { cn } from '@/lib/cn'
import { useUiStore } from '@/store/ui.store'
import { useEditorStore } from '@/store/editor.store'
import { useCallback, useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { applyResize, resizeCursor, type ElementBox, type ResizeHandle } from '@/lib/element-resize'

const HANDLES: ResizeHandle[] = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']

const handlePosition: Record<ResizeHandle, string> = {
  nw: '-left-1.5 -top-1.5',
  n: 'left-1/2 -top-1.5 -translate-x-1/2',
  ne: '-right-1.5 -top-1.5',
  e: '-right-1.5 top-1/2 -translate-y-1/2',
  se: '-right-1.5 -bottom-1.5',
  s: 'left-1/2 -bottom-1.5 -translate-x-1/2',
  sw: '-left-1.5 -bottom-1.5',
  w: '-left-1.5 top-1/2 -translate-y-1/2',
}

interface ResizeHandlesProps {
  elementId: string
  box: ElementBox
  pageWidth: number
  pageHeight: number
}

interface ResizeDrag {
  handle: ResizeHandle
  startX: number
  startY: number
  startBox: ElementBox
}

export function ResizeHandles({ elementId, box, pageWidth, pageHeight }: ResizeHandlesProps) {
  const resizeElement = useEditorStore((state) => state.resizeElement)
  const dragRef = useRef<ResizeDrag | null>(null)
  const latestPointRef = useRef<{ x: number; y: number } | null>(null)
  const frameRef = useRef(0)
  const detachRef = useRef<(() => void) | null>(null)

  // Pointermove can fire more than once per frame; buffer the latest position and write to the
  // store at most once per animation frame instead of once per event.
  const commit = useCallback(() => {
    frameRef.current = 0

    const drag = dragRef.current
    const point = latestPointRef.current
    if (!drag || !point) {
      return
    }

    latestPointRef.current = null
    const scale = useUiStore.getState().zoom || 1

    resizeElement(
      elementId,
      applyResize(
        drag.startBox,
        drag.handle,
        (point.x - drag.startX) / scale,
        (point.y - drag.startY) / scale,
        pageWidth,
        pageHeight,
      ),
    )
  }, [elementId, pageWidth, pageHeight, resizeElement])

  // Detaching is what stops the window listeners. Without it an unmount mid-gesture leaves
  // `pointermove` attached forever, resizing an element that no longer exists.
  const detach = useCallback(() => {
    detachRef.current?.()
    detachRef.current = null

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }

    dragRef.current = null
    latestPointRef.current = null
  }, [])

  useEffect(() => detach, [detach])

  const onPointerDown = (event: ReactPointerEvent<HTMLButtonElement>, handle: ResizeHandle) => {
    event.preventDefault()
    event.stopPropagation()

    dragRef.current = {
      handle,
      startX: event.clientX,
      startY: event.clientY,
      startBox: { ...box },
    }

    const target = event.currentTarget
    target.setPointerCapture(event.pointerId)

    const onPointerMove = (moveEvent: PointerEvent) => {
      if (!dragRef.current) {
        return
      }

      latestPointRef.current = { x: moveEvent.clientX, y: moveEvent.clientY }

      if (frameRef.current) {
        return
      }

      frameRef.current = requestAnimationFrame(commit)
    }

    const finish = (finishEvent: PointerEvent) => {
      if (target.hasPointerCapture(finishEvent.pointerId)) {
        target.releasePointerCapture(finishEvent.pointerId)
      }

      if (dragRef.current) {
        latestPointRef.current = { x: finishEvent.clientX, y: finishEvent.clientY }

        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
          frameRef.current = 0
        }

        commit()
      }

      detach()
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', finish)
    window.addEventListener('pointercancel', finish)

    detachRef.current = () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', finish)
      window.removeEventListener('pointercancel', finish)
    }
  }

  return (
    <>
      {HANDLES.map((handle) => (
        <button
          key={handle}
          type="button"
          data-no-dnd="true"
          aria-label={`Resize ${handle}`}
          onPointerDown={(event) => onPointerDown(event, handle)}
          onClick={(event) => event.stopPropagation()}
          className={cn(
            'border-primary absolute z-20 h-3 w-3 rounded-xs border bg-white shadow-sm',
            handlePosition[handle],
          )}
          style={{ cursor: resizeCursor(handle) }}
        />
      ))}
    </>
  )
}
