'use client'

import { Minus, Plus } from 'lucide-react'
import { CanvasPage } from '@/components/editor/CanvasPage'
import { SavedTemplates } from '@/components/editor/SavedTemplates'
import { useEditorStore } from '@/store/editor.store'
import { useUiStore } from '@/store/ui.store'

interface CanvasProps {
  interactive?: boolean
  pageIds?: string[]
}

export function Canvas({ interactive = true, pageIds }: CanvasProps) {
  const activePageId = useEditorStore((state) => state.getActiveTab()?.activePageId)
  const zoom = useUiStore((state) => state.zoom)
  const setZoom = useUiStore((state) => state.setZoom)
  const ids = pageIds ?? (activePageId ? [activePageId] : [])

  return (
    <section className="bg-workspace relative flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="border-border bg-surface absolute top-4 right-4 z-10 flex items-center gap-1 rounded-lg border px-1 py-1 shadow-sm">
        <button
          type="button"
          aria-label="Zoom out"
          className="text-muted hover:bg-surface-muted hover:text-foreground flex h-7 w-7 items-center justify-center rounded-md"
          onClick={() => setZoom(Math.max(0.5, Number((zoom - 0.1).toFixed(1))))}>
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="text-foreground min-w-12 text-center text-[12px] font-medium">{Math.round(zoom * 100)}%</span>
        <button
          type="button"
          aria-label="Zoom in"
          className="text-muted hover:bg-surface-muted hover:text-foreground flex h-7 w-7 items-center justify-center rounded-md"
          onClick={() => setZoom(Math.min(1.5, Number((zoom + 0.1).toFixed(1))))}>
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col items-center overflow-auto p-8">
        <div
          className="flex flex-col items-center gap-8"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}>
          {ids.length === 0 ? (
            <div className="text-muted flex h-160 w-120 items-center justify-center rounded-lg bg-white text-sm shadow-sm">
              No page selected
            </div>
          ) : (
            ids.map((pageId) => <CanvasPage key={pageId} pageId={pageId} interactive={interactive} />)
          )}
        </div>
      </div>
      {interactive ? <SavedTemplates /> : null}
    </section>
  )
}
