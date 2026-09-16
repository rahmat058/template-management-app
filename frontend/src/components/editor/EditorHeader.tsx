'use client'

import { FileText, Eye, Redo2, Save, Undo2 } from 'lucide-react'
import { DownloadPdfButton } from '@/components/editor/DownloadPdfButton'
import { Button } from '@/components/ui/Button'
import { Tooltip } from '@/components/ui/Tooltip'
import { useSaveTemplate } from '@/hooks/useSaveTemplate'
import { useEditorStore } from '@/store/editor.store'
import { useHistoryStore } from '@/store/history.store'
import { useUiStore } from '@/store/ui.store'

export function EditorHeader() {
  const name = useEditorStore((state) => state.getActiveTab()?.name ?? '')
  const isDirty = useEditorStore((state) => state.getActiveTab()?.isDirty ?? false)
  const mode = useEditorStore((state) => state.mode)
  const setTabName = useEditorStore((state) => state.setTabName)
  const setMode = useEditorStore((state) => state.setMode)
  const { canUndo, canRedo, undo, redo } = useHistoryStore()
  const saveStatus = useUiStore((state) => state.saveStatus)
  const saveMessage = useUiStore((state) => state.saveMessage)
  const saveTemplate = useSaveTemplate()

  return (
    <header className="border-border bg-surface flex h-[60px] shrink-0 items-center justify-between gap-4 border-b px-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="bg-primary flex h-9 w-9 items-center justify-center rounded-[10px] text-white shadow-sm">
          <FileText className="h-4 w-4" />
        </div>
        <div>
          <h1 className="text-foreground text-[15px] leading-none font-semibold">Document Editor (PoC)</h1>
          <p className="text-muted mt-1 text-[11px]">
            {saveStatus === 'saving'
              ? 'Saving...'
              : saveStatus === 'saved'
                ? 'Saved'
                : saveStatus === 'error'
                  ? saveMessage
                  : isDirty
                    ? 'Unsaved changes'
                    : 'Desktop visual editor'}
          </p>
        </div>
        <label className="ml-4 flex max-w-sm min-w-[240px] items-center gap-2">
          <span className="text-muted text-[12px] font-medium whitespace-nowrap">Project Name</span>
          <input
            aria-label="Project name"
            value={name}
            onChange={(event) => setTabName(event.target.value)}
            className="border-border bg-surface-muted text-foreground focus:border-primary focus:bg-surface focus:ring-primary/20 h-9 w-full rounded-[8px] border px-3 text-[13px] font-medium transition-colors outline-none focus:ring-2"
          />
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Tooltip label="Undo" shortcut="Ctrl+Z">
          <Button size="icon" variant="ghost" aria-label="Undo" disabled={!canUndo} onClick={undo}>
            <Undo2 className="h-4 w-4" />
          </Button>
        </Tooltip>
        <Tooltip label="Redo" shortcut="Ctrl+Shift+Z">
          <Button size="icon" variant="ghost" aria-label="Redo" disabled={!canRedo} onClick={redo}>
            <Redo2 className="h-4 w-4" />
          </Button>
        </Tooltip>
        <Tooltip label="Preview">
          <Button
            aria-label="Preview"
            variant={mode === 'preview' ? 'primary' : 'secondary'}
            onClick={() => setMode(mode === 'preview' ? 'edit' : 'preview')}>
            <Eye className="h-4 w-4" />
            Preview
          </Button>
        </Tooltip>
        <Tooltip label="Save" shortcut="Ctrl+S">
          <Button
            variant="primary"
            aria-label="Save template"
            isLoading={saveTemplate.isPending}
            onClick={() => saveTemplate.mutate()}>
            <Save className="h-4 w-4" />
            Save
          </Button>
        </Tooltip>
        <DownloadPdfButton />
      </div>
    </header>
  )
}
