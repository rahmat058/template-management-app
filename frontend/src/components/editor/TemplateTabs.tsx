"use client";

import { FileText, Plus, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { DEFAULT_TAB_NAME } from "@/lib/templates";
import { useEditorStore } from "@/store/editor.store";

export function TemplateTabs() {
  const tabs = useEditorStore((state) => state.tabs);
  const activeTabId = useEditorStore((state) => state.activeTabId);
  const setActiveTab = useEditorStore((state) => state.setActiveTab);
  const createTab = useEditorStore((state) => state.createTab);
  const closeTab = useEditorStore((state) => state.closeTab);

  return (
    <div className="flex h-[44px] shrink-0 items-center gap-1 border-b border-border bg-surface px-3">
      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const active = tab.id === activeTabId;

          return (
            <div
              key={tab.id}
              className={cn(
                "flex h-8 shrink-0 items-center rounded-[8px] px-1.5",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-surface-muted hover:text-foreground",
              )}
            >
              <button
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className="flex max-w-[180px] items-center gap-1.5 truncate px-2 text-[13px] font-medium"
              >
                <FileText className="h-3.5 w-3.5 shrink-0" />
                {tab.name}
                {tab.isDirty ? " •" : ""}
              </button>
              <button
                type="button"
                aria-label={`Close ${tab.name}`}
                onClick={() => closeTab(tab.id)}
                className="rounded-[6px] p-1 text-muted hover:bg-white/70 hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        aria-label="Create new template tab"
        onClick={() => createTab(DEFAULT_TAB_NAME)}
        className="flex h-8 w-8 items-center justify-center rounded-[8px] text-muted hover:bg-surface-muted hover:text-foreground"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
