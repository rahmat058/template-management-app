import type { Page } from '@/types/document'

export const MAX_HISTORY = 50
export const HISTORY_MERGE_MS = 500

export interface EditorSnapshot {
  pages: Page[]
  activePageId: string
  selectedElementId: string | null
  isDirty: boolean
}

export interface TabHistory {
  past: EditorSnapshot[]
  future: EditorSnapshot[]
}

interface HistoryOwnedTab {
  history: TabHistory
  document: {
    pages: Page[]
    version: number
  }
  activePageId: string
  selectedElementId: string | null
  isDirty: boolean
}

let mergeKey: string | null = null
let mergeAt = 0

export function emptyHistory(): TabHistory {
  return { past: [], future: [] }
}

export function uniqueHistoryKey(prefix: string, id: string): string {
  return `${prefix}:${id}:${Date.now()}`
}

export function resetHistoryMerge(): void {
  mergeKey = null
  mergeAt = 0
}

export function takeSnapshot(tab: HistoryOwnedTab): EditorSnapshot {
  return {
    pages: structuredClone(tab.document.pages),
    activePageId: tab.activePageId,
    selectedElementId: tab.selectedElementId,
    isDirty: tab.isDirty,
  }
}

export function applySnapshot<T extends HistoryOwnedTab>(tab: T, snapshot: EditorSnapshot): T {
  return {
    ...tab,
    isDirty: snapshot.isDirty,
    activePageId: snapshot.activePageId,
    selectedElementId: snapshot.selectedElementId,
    document: {
      ...tab.document,
      pages: snapshot.pages,
    },
  }
}

export function withHistory<T extends HistoryOwnedTab>(tab: T, key: string, updater: (tab: T) => T): T {
  const now = Date.now()
  const shouldMerge = mergeKey === key && now - mergeAt < HISTORY_MERGE_MS
  mergeKey = key
  mergeAt = now

  if (shouldMerge) {
    return updater(tab)
  }

  return updater({
    ...tab,
    history: {
      past: [...tab.history.past, takeSnapshot(tab)].slice(-MAX_HISTORY),
      future: [],
    },
  })
}

export function undoTab<T extends HistoryOwnedTab>(tab: T): T {
  const previous = tab.history.past[tab.history.past.length - 1]
  if (!previous) {
    return tab
  }

  resetHistoryMerge()
  const current = takeSnapshot(tab)

  return {
    ...applySnapshot(tab, previous),
    history: {
      past: tab.history.past.slice(0, -1),
      future: [...tab.history.future, current],
    },
  }
}

export function redoTab<T extends HistoryOwnedTab>(tab: T): T {
  const next = tab.history.future[tab.history.future.length - 1]
  if (!next) {
    return tab
  }

  resetHistoryMerge()
  const current = takeSnapshot(tab)

  return {
    ...applySnapshot(tab, next),
    history: {
      past: [...tab.history.past, current],
      future: tab.history.future.slice(0, -1),
    },
  }
}
