'use client'

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import { Image as ImageIcon, MousePointer2, Plus, Square, Table2, Type } from 'lucide-react'

import { PageThumbnails } from '@/components/editor/PageThumbnails'
import { useEditorStore } from '@/store/editor.store'
import { useUiStore } from '@/store/ui.store'
import {
  createImageElement,
  createShapeElement,
  createTableElement,
  createTextElement,
  nextElementOffset,
} from '@/lib/document-utils'

export function Toolbox() {
  // Subscribe to the element count as a primitive: the pages array gets a new identity on every
  // edit, so subscribing to it would re-render the whole toolbox on every keystroke.
  const elementCount = useEditorStore((state) => state.getActivePage()?.elements.length ?? 0)
  const addElement = useEditorStore((state) => state.addElement)
  const selectElement = useEditorStore((state) => state.selectElement)
  const activeTool = useUiStore((state) => state.activeTool)
  const setActiveTool = useUiStore((state) => state.setActiveTool)

  const addWithOffset = (
    factory: (offset: {
      x: number
      y: number
    }) => ReturnType<
      typeof createTextElement | typeof createTableElement | typeof createImageElement | typeof createShapeElement
    >,
  ) => {
    addElement(factory(nextElementOffset(elementCount)))
    setActiveTool('select')
  }

  return (
    <aside className="bg-toolbox text-toolbox-text flex h-full min-h-0 w-60 shrink-0 flex-col overflow-hidden">
      <section className="p-3 pb-2">
        <h2 className="text-toolbox-subtle mb-2 px-2 text-[11px] font-semibold tracking-wide uppercase">Components</h2>
        <div className="flex flex-col gap-1">
          <ToolboxItem
            icon={<MousePointer2 className="h-4 w-4" />}
            label="Select"
            active={activeTool === 'select'}
            onClick={() => {
              setActiveTool('select')
              selectElement(null)
            }}
          />
          <ToolboxItem
            icon={<Type className="h-4 w-4" />}
            label="Text Block"
            active={activeTool === 'text'}
            onClick={() => addWithOffset((offset) => createTextElement(offset))}
          />
          <ToolboxItem
            icon={<Table2 className="h-4 w-4" />}
            label="Simple Table"
            active={activeTool === 'table'}
            onClick={() => addWithOffset((offset) => createTableElement(offset))}
          />
          <ToolboxItem
            icon={<ImageIcon className="h-4 w-4" />}
            label="Image"
            active={activeTool === 'image'}
            onClick={() => addWithOffset((offset) => createImageElement(offset))}
          />
          <ToolboxItem
            icon={<Square className="h-4 w-4" />}
            label="Shape"
            active={activeTool === 'shape'}
            onClick={() => addWithOffset((offset) => createShapeElement(offset))}
          />
        </div>
      </section>

      <section className="px-3 pb-3">
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="border-toolbox-border text-toolbox-text hover:bg-toolbox-muted flex h-9 w-full items-center justify-center gap-1.5 rounded-full border text-[12px] font-medium"
            onClick={() => addWithOffset((offset) => createTableElement(offset))}>
            <Plus className="h-3.5 w-3.5" />
            Add Simple Table
          </button>
          <button
            type="button"
            className="border-toolbox-border text-toolbox-text hover:bg-toolbox-muted flex h-9 w-full items-center justify-center gap-1.5 rounded-full border text-[12px] font-medium"
            onClick={() =>
              addWithOffset((offset) =>
                createTextElement({
                  ...offset,
                  width: 420,
                  height: 28,
                  text: { content: 'New text line' },
                }),
              )
            }>
            <Plus className="h-3.5 w-3.5" />
            Add New Text Line
          </button>
        </div>
      </section>

      <PageThumbnails />
    </aside>
  )
}

function ToolboxItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: ReactNode
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex h-9 items-center gap-3 rounded-lg px-3 text-[13px] font-medium transition-colors',
        active ? 'bg-primary text-white' : 'text-toolbox-text hover:bg-toolbox-muted',
      )}>
      {icon}
      {label}
    </button>
  )
}
