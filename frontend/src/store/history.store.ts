import { useEditorStore } from "@/store/editor.store";

export function useHistoryStore() {
  const canUndo = useEditorStore((state) => {
    const tab = state.tabs.find((item) => item.id === state.activeTabId);
    return (tab?.history.past.length ?? 0) > 0;
  });
  const canRedo = useEditorStore((state) => {
    const tab = state.tabs.find((item) => item.id === state.activeTabId);
    return (tab?.history.future.length ?? 0) > 0;
  });
  const undo = useEditorStore((state) => state.undo);
  const redo = useEditorStore((state) => state.redo);

  return { canUndo, canRedo, undo, redo };
}
