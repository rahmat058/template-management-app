'use client'

import { Button } from '@/components/ui/Button'
import { Canvas } from '@/components/editor/Canvas'
import { DownloadPdfButton } from '@/components/editor/DownloadPdfButton'
import { useEditorStore } from '@/store/editor.store'
import { useShallow } from 'zustand/react/shallow'

export function PreviewMode() {
  const setMode = useEditorStore((state) => state.setMode)
  const pageIds = useEditorStore(
    useShallow((state) => {
      const tab = state.getActiveTab()
      if (!tab) {
        return []
      }

      return [...tab.document.pages].sort((left, right) => left.order - right.order).map((page) => page.id)
    }),
  )

  return (
    <div className="bg-workspace flex min-h-0 flex-1 flex-col">
      <div className="border-border bg-surface flex items-center justify-between border-b px-4 py-3">
        <h1 className="text-foreground text-[16px] font-semibold">Preview</h1>
        <div className="flex items-center gap-2">
          <DownloadPdfButton />
          <Button onClick={() => setMode('edit')}>Back to Edit</Button>
        </div>
      </div>
      <Canvas interactive={false} pageIds={pageIds} />
    </div>
  )
}
