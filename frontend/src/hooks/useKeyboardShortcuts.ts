import { useEffect } from "react";
import { isEditableTarget } from "@/lib/document-utils";
import { useSaveTemplate } from "@/hooks/useSaveTemplate";
import { useEditorStore } from "@/store/editor.store";

export function useKeyboardShortcuts(): void {
  const saveTemplate = useSaveTemplate();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isMeta = event.metaKey || event.ctrlKey;
      const key = event.key.toLowerCase();

      if (isMeta && key === "s") {
        event.preventDefault();
        saveTemplate.mutate();
        return;
      }

      if (isMeta && key === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          useEditorStore.getState().redo();
          return;
        }

        useEditorStore.getState().undo();
        return;
      }

      if (isMeta && key === "y") {
        event.preventDefault();
        useEditorStore.getState().redo();
        return;
      }

      if (event.key === "Escape") {
        if (useEditorStore.getState().mode === "preview") {
          useEditorStore.getState().setMode("edit");
          return;
        }

        useEditorStore.getState().selectElement(null);
        return;
      }

      if (event.key === "Delete" || event.key === "Backspace") {
        if (isEditableTarget(event.target)) {
          return;
        }

        event.preventDefault();
        useEditorStore.getState().removeSelectedElement();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [saveTemplate]);
}
