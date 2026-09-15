import { create } from "zustand";
import {
  createDefaultPages,
  createId,
  createPage,
  DOCUMENT_VERSION,
} from "@/lib/default-document";
import type { Page } from "@/types/document";
import type { DocumentElement } from "@/types/element";
import type { Template } from "@/types/template";
import {
  emptyHistory,
  uniqueHistoryKey,
  undoTab,
  redoTab,
  withHistory,
  type TabHistory,
} from "@/lib/editor-history";

export interface EditorDocument {
  pages: Page[];
  version: number;
}

export interface EditorTab {
  id: string;
  name: string;
  templateId: string | null;
  document: EditorDocument;
  activePageId: string;
  selectedElementId: string | null;
  isDirty: boolean;
  history: TabHistory;
}

interface EditorState {
  tabs: EditorTab[];
  activeTabId: string;
  mode: "edit" | "preview";
  getActiveTab: () => EditorTab | undefined;
  getActivePage: () => Page | undefined;
  getSelectedElement: () => DocumentElement | null;
  setActiveTab: (tabId: string) => void;
  setTabName: (name: string) => void;
  createTab: (name?: string) => void;
  closeTab: (tabId: string) => void;
  openTemplate: (template: Template) => void;
  markSaved: (templateId: string, name: string) => void;
  setMode: (mode: "edit" | "preview") => void;
  setActivePage: (pageId: string) => void;
  addPage: () => void;
  removePage: (pageId?: string) => void;
  selectElement: (elementId: string | null) => void;
  addElement: (element: DocumentElement) => void;
  moveElement: (elementId: string, x: number, y: number) => void;
  updateElement: (
    elementId: string,
    updater: (element: DocumentElement) => DocumentElement,
    historyKey?: string,
  ) => void;
  updatePage: (updater: (page: Page) => Page) => void;
  removeSelectedElement: () => void;
  undo: () => void;
  redo: () => void;
}

function createUntitledTab(name = "New-Template", tabId?: string): EditorTab {
  const pages = createDefaultPages();
  const firstPage = pages[0];

  return {
    id: tabId ?? createId("tab"),
    name,
    templateId: null,
    document: {
      pages,
      version: DOCUMENT_VERSION,
    },
    activePageId: firstPage?.id ?? createId("page"),
    selectedElementId: null,
    isDirty: false,
    history: emptyHistory(),
  };
}

function replaceActiveTab(
  tabs: EditorTab[],
  activeTabId: string,
  updater: (tab: EditorTab) => EditorTab,
): EditorTab[] {
  return tabs.map((tab) => (tab.id === activeTabId ? updater(tab) : tab));
}

function updateActivePage(
  tab: EditorTab,
  updater: (page: Page) => Page,
): EditorTab {
  return {
    ...tab,
    isDirty: true,
    document: {
      ...tab.document,
      pages: tab.document.pages.map((page) =>
        page.id === tab.activePageId ? updater(page) : page,
      ),
    },
  };
}

function mutateActiveTab(
  tabs: EditorTab[],
  activeTabId: string,
  historyKey: string | null,
  updater: (tab: EditorTab) => EditorTab,
): EditorTab[] {
  return replaceActiveTab(tabs, activeTabId, (tab) =>
    historyKey
      ? withHistory(tab, `${tab.id}:${historyKey}`, updater)
      : updater(tab),
  );
}

export const useEditorStore = create<EditorState>((set, get) => {
  const initialTab = createUntitledTab("New-Template", "tab-untitled");

  return {
    tabs: [initialTab],
    activeTabId: initialTab.id,
    mode: "edit",

    getActiveTab: () => {
      const { tabs, activeTabId } = get();
      return tabs.find((tab) => tab.id === activeTabId);
    },

    getActivePage: () => {
      const tab = get().getActiveTab();
      if (!tab) {
        return undefined;
      }

      return tab.document.pages.find((page) => page.id === tab.activePageId);
    },

    getSelectedElement: () => {
      const tab = get().getActiveTab();
      if (!tab?.selectedElementId) {
        return null;
      }

      const page = tab.document.pages.find(
        (item) => item.id === tab.activePageId,
      );
      return (
        page?.elements.find((element) => element.id === tab.selectedElementId) ??
        null
      );
    },

    setActiveTab: (tabId) => {
      set({ activeTabId: tabId, mode: "edit" });
    },

    setTabName: (name) => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab) => ({
          ...tab,
          name,
          isDirty: true,
        })),
      }));
    },

    createTab: (name) => {
      const tab = createUntitledTab(name);
      set((state) => ({
        tabs: [...state.tabs, tab],
        activeTabId: tab.id,
        mode: "edit",
      }));
    },

    closeTab: (tabId) => {
      set((state) => {
        if (state.tabs.length === 1) {
          const tab = createUntitledTab();
          return {
            tabs: [tab],
            activeTabId: tab.id,
            mode: "edit",
          };
        }

        const remaining = state.tabs.filter((tab) => tab.id !== tabId);
        const fallbackTab = remaining[remaining.length - 1] ?? remaining[0];
        const activeTabId =
          state.activeTabId === tabId && fallbackTab
            ? fallbackTab.id
            : state.activeTabId;

        return {
          tabs: remaining,
          activeTabId,
        };
      });
    },

    openTemplate: (template) => {
      const existing = get().tabs.find((tab) => tab.templateId === template.id);
      if (existing) {
        set({ activeTabId: existing.id, mode: "edit" });
        return;
      }

      const firstPage = template.pages[0];
      const tab: EditorTab = {
        id: createId("tab"),
        name: template.name,
        templateId: template.id,
        document: {
          pages: template.pages,
          version: template.version,
        },
        activePageId: firstPage?.id ?? createId("page"),
        selectedElementId: null,
        isDirty: false,
        history: emptyHistory(),
      };

      set((state) => ({
        tabs: [...state.tabs, tab],
        activeTabId: tab.id,
        mode: "edit",
      }));
    },

    markSaved: (templateId, name) => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab) => ({
          ...tab,
          templateId,
          name,
          isDirty: false,
        })),
      }));
    },

    setMode: (mode) => {
      set({ mode });
    },

    setActivePage: (pageId) => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab) => ({
          ...tab,
          activePageId: pageId,
          selectedElementId: null,
        })),
      }));
    },

    addPage: () => {
      set((state) => ({
        tabs: mutateActiveTab(
          state.tabs,
          state.activeTabId,
          uniqueHistoryKey("add-page", "page"),
          (tab) => {
          const page = createPage({
            order: tab.document.pages.length,
          });

          return {
            ...tab,
            isDirty: true,
            activePageId: page.id,
            selectedElementId: null,
            document: {
              ...tab.document,
              pages: [...tab.document.pages, page],
            },
          };
        }),
      }));
    },

    removePage: (pageId) => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab) => {
          if (tab.document.pages.length <= 1) {
            return tab;
          }

          const targetId = pageId ?? tab.activePageId;
          if (!tab.document.pages.some((page) => page.id === targetId)) {
            return tab;
          }

          return withHistory(tab, `${tab.id}:remove-page:${targetId}`, (current) => {
            const remaining = current.document.pages
              .filter((page) => page.id !== targetId)
              .map((page, index) => ({ ...page, order: index }));
            const fallback =
              remaining.find((page) => page.id === current.activePageId) ??
              remaining[remaining.length - 1] ??
              remaining[0];

            if (!fallback) {
              return current;
            }

            return {
              ...current,
              isDirty: true,
              activePageId: fallback.id,
              selectedElementId: null,
              document: {
                ...current.document,
                pages: remaining,
              },
            };
          });
        }),
      }));
    },

    selectElement: (elementId) => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab) => ({
          ...tab,
          selectedElementId: elementId,
        })),
      }));
    },

    addElement: (element) => {
      set((state) => ({
        tabs: mutateActiveTab(
          state.tabs,
          state.activeTabId,
          `add:${element.id}`,
          (tab) => ({
            ...updateActivePage(tab, (page) => ({
              ...page,
              elements: [...page.elements, element],
            })),
            selectedElementId: element.id,
          }),
        ),
      }));
    },

    moveElement: (elementId, x, y) => {
      set((state) => ({
        tabs: mutateActiveTab(
          state.tabs,
          state.activeTabId,
          `move:${elementId}`,
          (tab) =>
            updateActivePage(tab, (page) => ({
              ...page,
              elements: page.elements.map((element) => {
                if (element.id !== elementId) {
                  return element;
                }

                return {
                  ...element,
                  x: Math.round(
                    Math.max(0, Math.min(page.width - element.width, x)),
                  ),
                  y: Math.round(
                    Math.max(0, Math.min(page.height - element.height, y)),
                  ),
                };
              }),
            })),
        ),
      }));
    },

    updateElement: (elementId, updater, historyKey) => {
      set((state) => ({
        tabs: mutateActiveTab(
          state.tabs,
          state.activeTabId,
          historyKey ?? `element:${elementId}`,
          (tab) =>
            updateActivePage(tab, (page) => ({
              ...page,
              elements: page.elements.map((element) =>
                element.id === elementId ? updater(element) : element,
              ),
            })),
        ),
      }));
    },

    updatePage: (updater) => {
      set((state) => ({
        tabs: mutateActiveTab(state.tabs, state.activeTabId, "page", (tab) =>
          updateActivePage(tab, updater),
        ),
      }));
    },

    removeSelectedElement: () => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab) => {
          if (!tab.selectedElementId) {
            return tab;
          }

          const selectedId = tab.selectedElementId;
          return withHistory(tab, `${tab.id}:remove:${selectedId}`, (current) => ({
            ...updateActivePage(current, (page) => ({
              ...page,
              elements: page.elements.filter(
                (element) => element.id !== selectedId,
              ),
            })),
            selectedElementId: null,
          }));
        }),
      }));
    },

    undo: () => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, undoTab),
      }));
    },

    redo: () => {
      set((state) => ({
        tabs: replaceActiveTab(state.tabs, state.activeTabId, redoTab),
      }));
    },
  };
});
