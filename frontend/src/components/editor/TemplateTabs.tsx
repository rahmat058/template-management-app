'use client'

import { cn } from '@/lib/cn'
import { FileText, Plus, X } from 'lucide-react'
import { DEFAULT_TAB_NAME } from '@/lib/templates'
import { useEditorStore } from '@/store/editor.store'

export function TemplateTabs() {
  const tabs = useEditorStore((state) => state.tabs)
  const activeTabId = useEditorStore((state) => state.activeTabId)
  const setActiveTab = useEditorStore((state) => state.setActiveTab)
  const createTab = useEditorStore((state) => state.createTab)
  const closeTab = useEditorStore((state) => state.closeTab)

  return (
    <div className="border-border bg-background flex h-11 shrink-0 items-stretch border-b px-2">
      <div className="flex min-w-0 flex-1 items-stretch gap-0.5 overflow-x-auto">
        {tabs.map((tab) => {
          const active = tab.id === activeTabId

          return (
            <div
              key={tab.id}
              className={cn(
                'flex max-w-56 shrink-0 items-center border-b-2 px-1 transition-colors',
                active
                  ? 'border-primary bg-surface text-primary'
                  : 'text-muted hover:bg-primary/10 hover:text-primary border-transparent',
              )}>
              <button
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="flex min-w-0 items-center gap-2 px-1.5 py-2 text-[13px]">
                <FileText className={cn('h-3.5 w-3.5 shrink-0', active ? 'text-primary' : 'text-muted-foreground')} />
                <span className={cn('truncate', active && 'font-semibold')}>{tab.name}</span>
                {tab.isDirty ? <span className="shrink-0 text-[13px] leading-none">•</span> : null}
              </button>
              <button
                type="button"
                aria-label={`Close ${tab.name}`}
                onClick={() => closeTab(tab.id)}
                className="text-muted hover:bg-primary/10 hover:text-primary mr-1 rounded-md p-1">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )
        })}
        <button
          type="button"
          aria-label="Create new template tab"
          onClick={() => createTab(DEFAULT_TAB_NAME)}
          className="text-muted hover:bg-primary/10 hover:text-primary flex w-11 shrink-0 items-center justify-center transition-colors">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
