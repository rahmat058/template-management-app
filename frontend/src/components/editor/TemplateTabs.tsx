'use client'

import { cn } from '@/lib/cn'
import { memo, useCallback, useState } from 'react'
import { FileText, Plus, X } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { DEFAULT_TAB_NAME } from '@/lib/templates'
import { useEditorStore, type EditorTab } from '@/store/editor.store'

export function TemplateTabs() {
  const tabs = useEditorStore((state) => state.tabs)
  const activeTabId = useEditorStore((state) => state.activeTabId)
  const setActiveTab = useEditorStore((state) => state.setActiveTab)
  const createTab = useEditorStore((state) => state.createTab)
  const [pendingClose, setPendingClose] = useState<EditorTab | null>(null)

  const requestClose = useCallback((tabId: string) => {
    const tab = useEditorStore.getState().tabs.find((item) => item.id === tabId)

    if (tab?.isDirty) {
      setPendingClose(tab)
      return
    }

    useEditorStore.getState().closeTab(tabId)
  }, [])

  return (
    <>
      <div className="border-border bg-background flex h-11 shrink-0 items-stretch border-b px-2">
        <div className="flex min-w-0 flex-1 items-stretch gap-0.5 overflow-x-auto">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tabId={tab.id}
              name={tab.name}
              isDirty={tab.isDirty}
              active={tab.id === activeTabId}
              onSelect={setActiveTab}
              onClose={requestClose}
            />
          ))}
          <button
            type="button"
            aria-label="Create new template tab"
            onClick={() => createTab(DEFAULT_TAB_NAME)}
            className="text-muted hover:bg-primary/10 hover:text-primary flex w-11 shrink-0 items-center justify-center transition-colors">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <Modal
        open={pendingClose !== null}
        title="Discard unsaved changes"
        confirmLabel="Discard"
        danger
        onClose={() => setPendingClose(null)}
        onConfirm={() => {
          if (pendingClose) {
            useEditorStore.getState().closeTab(pendingClose.id)
            setPendingClose(null)
          }
        }}>
        {pendingClose ? `Close “${pendingClose.name}”? Its unsaved changes will be lost.` : null}
      </Modal>
    </>
  )
}

interface TabButtonProps {
  tabId: string
  name: string
  isDirty: boolean
  active: boolean
  onSelect: (tabId: string) => void
  onClose: (tabId: string) => void
}

const TabButton = memo(function TabButton({ tabId, name, isDirty, active, onSelect, onClose }: TabButtonProps) {
  return (
    <div
      className={cn(
        'flex max-w-56 shrink-0 items-center border-b-2 px-1 transition-colors',
        active
          ? 'border-primary bg-surface text-primary'
          : 'text-muted hover:bg-primary/10 hover:text-primary border-transparent',
      )}>
      <button
        type="button"
        onClick={() => onSelect(tabId)}
        className="flex min-w-0 items-center gap-2 px-1.5 py-2 text-[13px]">
        <FileText className={cn('h-3.5 w-3.5 shrink-0', active ? 'text-primary' : 'text-muted-foreground')} />
        <span className={cn('truncate', active && 'font-semibold')}>{name}</span>
        {isDirty ? <span className="shrink-0 text-[13px] leading-none">•</span> : null}
      </button>
      <button
        type="button"
        aria-label={`Close ${name}`}
        onClick={() => onClose(tabId)}
        className="text-muted hover:bg-primary/10 hover:text-primary mr-1 rounded-md p-1">
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
})
