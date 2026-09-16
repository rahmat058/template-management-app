'use client'

import { cn } from '@/lib/cn'
import { Plus, Trash2 } from 'lucide-react'
import { useShallow } from 'zustand/react/shallow'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

import { ImageElement } from '@/components/elements/ImageElement'
import { ShapeElement } from '@/components/elements/ShapeElement'
import { TableElement } from '@/components/elements/TableElement'
import { TextElement } from '@/components/elements/TextElement'
import { useEditorStore } from '@/store/editor.store'
import type { DocumentElement } from '@/types/element'

export function PageThumbnails() {
  // Subscribe to the ids rather than the pages array: the array gets a new identity on every
  // document edit, which would re-render every thumbnail. The ids only change structurally.
  const pageIds = useEditorStore(
    useShallow((state) => state.getActiveTab()?.document.pages.map((page) => page.id) ?? []),
  )
  const activePageId = useEditorStore((state) => state.getActiveTab()?.activePageId)
  const addPage = useEditorStore((state) => state.addPage)

  const selectPage = useCallback((pageId: string) => {
    useEditorStore.getState().setActivePage(pageId)
  }, [])

  const deletePage = useCallback((pageId: string) => {
    useEditorStore.getState().removePage(pageId)
  }, [])

  return (
    <section className="border-toolbox-border mt-auto flex min-h-0 flex-1 flex-col border-t p-3">
      <h2 className="text-toolbox-subtle mb-2 px-2 text-[11px] font-semibold tracking-wide uppercase">Pages</h2>
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
        {pageIds.map((pageId, index) => (
          <PageThumbnail
            key={pageId}
            pageId={pageId}
            index={index}
            active={pageId === activePageId}
            canDelete={pageIds.length > 1}
            onSelect={selectPage}
            onDelete={deletePage}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={addPage}
        className="border-toolbox-border text-toolbox-text hover:bg-toolbox-muted mt-2 flex h-9 w-full shrink-0 items-center justify-center gap-1.5 rounded-full border text-[12px] font-medium">
        <Plus className="h-3.5 w-3.5" />
        Add Page
      </button>
    </section>
  )
}

interface PageThumbnailProps {
  pageId: string
  index: number
  active: boolean
  canDelete: boolean
  onSelect: (pageId: string) => void
  onDelete: (pageId: string) => void
}

const PageThumbnail = memo(function PageThumbnail({
  pageId,
  index,
  active,
  canDelete,
  onSelect,
  onDelete,
}: PageThumbnailProps) {
  const page = useEditorStore((state) => state.getActiveTab()?.document.pages.find((item) => item.id === pageId))
  const previewRef = useRef<HTMLDivElement>(null)
  const [previewWidth, setPreviewWidth] = useState(0)

  useEffect(() => {
    const node = previewRef.current
    if (!node) {
      return
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setPreviewWidth(entry.contentRect.width)
      }
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  if (!page) {
    return null
  }

  const scale = previewWidth > 0 ? previewWidth / page.width : 0

  return (
    <div
      className={cn(
        'group relative rounded-[10px] border p-2 text-left transition-colors',
        active ? 'border-primary bg-primary/20' : 'border-toolbox-border hover:bg-toolbox-muted',
      )}>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <span className="text-toolbox-subtle text-[11px] font-semibold">Page {index + 1}</span>
        {canDelete ? (
          <button
            type="button"
            aria-label={`Delete page ${index + 1}`}
            onClick={() => onDelete(pageId)}
            className="text-toolbox-subtle hover:bg-danger/20 hover:text-danger flex h-5 w-5 items-center justify-center rounded-full">
            <Trash2 className="h-3 w-3" />
          </button>
        ) : null}
      </div>
      <button type="button" onClick={() => onSelect(pageId)} className="block w-full text-left">
        <div
          ref={previewRef}
          className="relative w-full overflow-hidden rounded-sm"
          style={{ aspectRatio: `${page.width} / ${page.height}`, backgroundColor: page.background }}>
          {scale > 0 ? (
            <div
              className="absolute top-0 left-0 origin-top-left"
              style={{
                width: page.width,
                height: page.height,
                transform: `scale(${scale})`,
              }}>
              {page.elements
                .filter((element) => element.visible !== false)
                .map((element) => (
                  <ThumbnailElement key={element.id} element={element} />
                ))}
            </div>
          ) : null}
        </div>
      </button>
    </div>
  )
})

const ThumbnailElement = memo(function ThumbnailElement({ element }: { element: DocumentElement }) {
  return (
    <div
      className="absolute"
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        zIndex: element.zIndex,
      }}>
      {element.type === 'text' ? <TextElement element={element} interactive={false} /> : null}
      {element.type === 'table' ? <TableElement element={element} interactive={false} selected={false} /> : null}
      {element.type === 'image' ? <ImageElement element={element} /> : null}
      {element.type === 'shape' ? <ShapeElement element={element} /> : null}
    </div>
  )
})
