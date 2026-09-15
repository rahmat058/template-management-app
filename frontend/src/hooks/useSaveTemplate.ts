import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { templateKeys } from "@/lib/query-keys";
import { useEditorStore } from "@/store/editor.store";
import { useUiStore } from "@/store/ui.store";

export function useSaveTemplate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const tab = useEditorStore.getState().getActiveTab();
      if (!tab) {
        throw new Error("No active template to save");
      }

      const payload = {
        name: tab.name.trim() || "Untitled template",
        pages: tab.document.pages,
        version: tab.document.version,
      };

      if (tab.templateId) {
        return api.updateTemplate(tab.templateId, payload);
      }

      return api.createTemplate(payload);
    },
    onMutate: () => {
      useUiStore.getState().setSaveStatus("saving");
    },
    onSuccess: (template) => {
      useEditorStore.getState().markSaved(template.id, template.name);
      useUiStore.getState().setSaveStatus("saved", "Saved");
      void queryClient.invalidateQueries({ queryKey: templateKeys.all });
      void queryClient.invalidateQueries({
        queryKey: templateKeys.detail(template.id),
      });
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Save failed";
      useUiStore.getState().setSaveStatus("error", message);
    },
  });
}
