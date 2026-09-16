import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { templateKeys } from '@/lib/query-keys'
import { AUTOLOAD_TEMPLATE_NAME, DEFAULT_TAB_NAME } from '@/lib/templates'
import { useEditorStore } from '@/store/editor.store'
import { useUiStore } from '@/store/ui.store'
import type { TemplateSummary } from '@/types/template'

function resolveSaveName(tabName: string, templateId: string | null, summaries: TemplateSummary[]): string {
  const trimmed = tabName.trim()

  if (templateId) {
    return trimmed || AUTOLOAD_TEMPLATE_NAME
  }

  const hasAutoloadTemplate = summaries.some((template) => template.name === AUTOLOAD_TEMPLATE_NAME)

  if (!hasAutoloadTemplate && (trimmed === '' || trimmed === DEFAULT_TAB_NAME)) {
    return AUTOLOAD_TEMPLATE_NAME
  }

  return trimmed || DEFAULT_TAB_NAME
}

export function useSaveTemplate() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const tab = useEditorStore.getState().getActiveTab()
      if (!tab) {
        throw new Error('No active template to save')
      }

      const summaries = queryClient.getQueryData<TemplateSummary[]>(templateKeys.all) ?? (await api.listTemplates())

      const payload = {
        name: resolveSaveName(tab.name, tab.templateId, summaries),
        pages: tab.document.pages,
        version: tab.document.version,
      }

      if (tab.templateId) {
        return api.updateTemplate(tab.templateId, payload)
      }

      return api.createTemplate(payload)
    },
    onMutate: () => {
      useUiStore.getState().setSaveStatus('saving')
    },
    onSuccess: (template) => {
      useEditorStore.getState().markSaved(template.id, template.name)
      useUiStore.getState().setSaveStatus('saved', 'Saved')
      void queryClient.invalidateQueries({ queryKey: templateKeys.all })
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : 'Save failed'
      useUiStore.getState().setSaveStatus('error', message)
    },
  })
}
