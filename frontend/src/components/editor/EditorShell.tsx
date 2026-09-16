'use client'

import { Canvas } from '@/components/editor/Canvas'
import { EditorHeader } from '@/components/editor/EditorHeader'
import { PreviewMode } from '@/components/editor/PreviewMode'
import { PropertiesPanel } from '@/components/editor/PropertiesPanel'
import { TemplateTabs } from '@/components/editor/TemplateTabs'
import { Toolbox } from '@/components/editor/Toolbox'
import { Button } from '@/components/ui/Button'
import { useHasMounted } from '@/hooks/useHasMounted'
import { useHydrateTemplate1 } from '@/hooks/useHydrateTemplate1'
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts'
import { useEditorStore } from '@/store/editor.store'

export function EditorShell() {
  useKeyboardShortcuts()
  const hasMounted = useHasMounted()
  const { isReady, error, retry } = useHydrateTemplate1()
  const mode = useEditorStore((state) => state.mode)

  if (!hasMounted || !isReady) {
    return <EditorShellFallback />
  }

  if (mode === 'preview') {
    return (
      <div className="bg-background flex h-screen flex-col overflow-hidden">
        {error ? <HydrationErrorBanner message={error} onRetry={retry} /> : null}
        <PreviewMode />
      </div>
    )
  }

  return (
    <div className="bg-background text-foreground flex h-screen flex-col overflow-hidden">
      {error ? <HydrationErrorBanner message={error} onRetry={retry} /> : null}
      <EditorHeader />
      <TemplateTabs />
      <div className="flex min-h-0 flex-1">
        <Toolbox />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  )
}

function HydrationErrorBanner({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="border-danger/20 bg-danger/5 flex items-center justify-between gap-3 border-b px-4 py-2">
      <p className="text-danger text-[12px]">{message} Showing the default document instead.</p>
      <Button size="sm" variant="outline" onClick={onRetry}>
        Try again
      </Button>
    </div>
  )
}

function EditorShellFallback() {
  return (
    <div className="bg-background text-foreground flex h-screen flex-col overflow-hidden">
      <div className="border-border bg-surface h-15 border-b" />
      <div className="border-border bg-surface h-11 border-b" />
      <div className="flex min-h-0 flex-1">
        <div className="bg-toolbox w-60 shrink-0" />
        <div className="bg-surface-muted flex flex-1 items-center justify-center">
          <p className="text-muted text-[13px]">Loading template...</p>
        </div>
        <div className="border-border bg-surface w-[320px] shrink-0 border-l" />
      </div>
    </div>
  )
}
