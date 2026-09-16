'use client'

import { DndContext, type DragEndEvent, useSensor, useSensors } from '@dnd-kit/core'
import { useShallow } from 'zustand/react/shallow'
import { ElementRenderer } from '@/components/editor/ElementRenderer'
import { EditorPointerSensor } from '@/lib/dnd-sensors'
import { useEditorStore } from '@/store/editor.store'
import { useUiStore } from '@/store/ui.store'

interface CanvasPageProps {
  pageId: string
  interactive: boolean
}

export function CanvasPage({ pageId, interactive }: CanvasPageProps) {
  const pageBox = useEditorStore(
    useShallow((state) => {
      const tab = state.tabs.find((item) => item.id === state.activeTabId)
      const page = tab?.document.pages.find((item) => item.id === pageId)
      if (!page) {
        return null
      }

      return {
        width: page.width,
        height: page.height,
        background: page.background,
      }
    }),
  )
  const elementIds = useEditorStore(
    useShallow((state) => {
      const tab = state.tabs.find((item) => item.id === state.activeTabId)
      const page = tab?.document.pages.find((item) => item.id === pageId)
      return page?.elements.map((element) => element.id) ?? []
    }),
  )
  const selectElement = useEditorStore((state) => state.selectElement)
  const moveElement = useEditorStore((state) => state.moveElement)
  const setActiveTool = useUiStore((state) => state.setActiveTool)
  const sensors = useSensors(useSensor(EditorPointerSensor, { activationConstraint: { distance: 6 } }))

  if (!pageBox) {
    return (
      <div className="text-muted flex h-[640px] w-[480px] items-center justify-center rounded-[8px] bg-white text-sm shadow-sm">
        No page selected
      </div>
    )
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const id = String(event.active.id)
    if (!id.startsWith('element:')) {
      return
    }

    const elementId = id.slice('element:'.length)
    const currentPage = useEditorStore
      .getState()
      .getActiveTab()
      ?.document.pages.find((page) => page.id === pageId)
    const element = currentPage?.elements.find((item) => item.id === elementId)
    if (!element) {
      return
    }

    const zoom = useUiStore.getState().zoom || 1
    moveElement(elementId, element.x + event.delta.x / zoom, element.y + event.delta.y / zoom)
  }

  const pageNode = (
    <div
      className="relative shrink-0 overflow-hidden rounded-[2px] shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
      style={{
        width: pageBox.width,
        height: pageBox.height,
        background: pageBox.background,
      }}
      onClick={() => {
        if (interactive) {
          selectElement(null)
          setActiveTool('select')
        }
      }}>
      {elementIds.map((elementId) => (
        <ElementRenderer key={elementId} pageId={pageId} elementId={elementId} interactive={interactive} />
      ))}
    </div>
  )

  if (!interactive) {
    return pageNode
  }

  return (
    <DndContext sensors={sensors} autoScroll={false} onDragEnd={handleDragEnd}>
      {pageNode}
    </DndContext>
  )
}
