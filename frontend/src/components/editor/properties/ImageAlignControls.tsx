'use client'

import type { ReactNode } from 'react'
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { useEditorStore } from '@/store/editor.store'

const PAGE_MARGIN = 56

export function ImageAlignControls({ elementId }: { elementId: string }) {
  const updateElement = useEditorStore((state) => state.updateElement)
  const pageWidth = useEditorStore((state) => state.getActivePage()?.width ?? 794)

  const align = (position: 'left' | 'center' | 'right') => {
    updateElement(elementId, (current) => {
      const nextX =
        position === 'left'
          ? PAGE_MARGIN
          : position === 'center'
            ? Math.round((pageWidth - current.width) / 2)
            : Math.max(0, pageWidth - current.width - PAGE_MARGIN)

      return { ...current, x: nextX }
    })
  }

  return (
    <div>
      <p className="text-muted mb-1.5 text-[12px] font-medium">Alignment</p>
      <div className="border-border flex overflow-hidden rounded-[8px] border">
        <AlignButton label="Align left" onClick={() => align('left')}>
          <AlignLeft className="h-4 w-4" />
        </AlignButton>
        <AlignButton label="Align center" onClick={() => align('center')}>
          <AlignCenter className="h-4 w-4" />
        </AlignButton>
        <AlignButton label="Align right" onClick={() => align('right')}>
          <AlignRight className="h-4 w-4" />
        </AlignButton>
      </div>
    </div>
  )
}

function AlignButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        'text-muted hover:bg-surface-muted hover:text-primary flex h-8 flex-1 items-center justify-center',
      )}>
      {children}
    </button>
  )
}
