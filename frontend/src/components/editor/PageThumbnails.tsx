'use client'

import { Plus, Trash2 } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useEditorStore } from '@/store/editor.store'
import type { Page } from '@/types/document'

export function PageThumbnails() {
  const pages = useEditorStore((state) => state.getActiveTab()?.document.pages ?? [])
  const activePageId = useEditorStore((state) => state.getActiveTab()?.activePageId)
  const addPage = useEditorStore((state) => state.addPage)
  const setActivePage = useEditorStore((state) => state.setActivePage)
  const removePage = useEditorStore((state) => state.removePage)

  return (
    <section className="border-toolbox-border mt-auto flex min-h-0 flex-1 flex-col border-t p-3">
      <h2 className="text-toolbox-subtle mb-2 px-2 text-[11px] font-semibold tracking-wide uppercase">Pages</h2>
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1">
        {pages.map((page, index) => (
          <PageThumbnail
            key={page.id}
            page={page}
            index={index}
            active={page.id === activePageId}
            canDelete={pages.length > 1}
            onSelect={() => setActivePage(page.id)}
            onDelete={() => removePage(page.id)}
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

function PageThumbnail({
  page,
  index,
  active,
  canDelete,
  onSelect,
  onDelete,
}: {
  page: Page
  index: number
  active: boolean
  canDelete: boolean
  onSelect: () => void
  onDelete: () => void
}) {
  return (
    <div
      className={cn(
        'group relative rounded-[10px] border p-2 text-left transition-colors',
        active ? 'border-primary bg-primary/20' : 'border-toolbox-border hover:bg-toolbox-muted',
      )}>
      <button type="button" onClick={onSelect} className="block w-full text-left">
        <div className="relative mb-2 h-[70px] overflow-hidden rounded-[6px] bg-white">
          <div
            className="origin-top-left bg-white"
            style={{
              width: page.width,
              height: page.height,
              transform: `scale(${72 / page.height})`,
            }}>
            {page.elements.slice(0, 8).map((element) => (
              <div
                key={element.id}
                className="absolute bg-slate-200"
                style={{
                  left: element.x,
                  top: element.y,
                  width: element.width,
                  height: Math.min(element.height, 48),
                }}
              />
            ))}
          </div>
          <span className="bg-primary absolute bottom-1 left-1 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-semibold text-white">
            {index + 1}
          </span>
        </div>
      </button>
      {canDelete ? (
        <button
          type="button"
          aria-label={`Delete page ${index + 1}`}
          onClick={(event) => {
            event.stopPropagation()
            onDelete()
          }}
          className="bg-toolbox text-toolbox-subtle hover:bg-danger/20 hover:text-danger absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full">
          <Trash2 className="h-3 w-3" />
        </button>
      ) : null}
    </div>
  )
}
