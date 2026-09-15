import { useEffect } from "react";
import { isEditableTarget } from "@/lib/document-utils";
import { useSaveTemplate } from "@/hooks/useSaveTemplate";
import { useEditorStore } from "@/store/editor.store";

export function useKeyboardShortcuts(): void {
  const saveTemplate = useSaveTemplate();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isMeta = event.metaKey || event.ctrlKey;

      if (isMeta && event.key.toLowerCase() === "s") {
        event.preventDefault();
        saveTemplate.mutate();
        return;
      }

      if (event.key === "Escape") {
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
