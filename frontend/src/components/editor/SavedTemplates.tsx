'use client'

import { format } from 'date-fns'
import { FileText, Folder, MoreHorizontal, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { useSaveTemplate } from '@/hooks/useSaveTemplate'
import { useTemplates } from '@/hooks/useTemplates'
import { api } from '@/lib/api'
import { templateKeys } from '@/lib/query-keys'
import { useEditorStore } from '@/store/editor.store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { TemplateSummary } from '@/types/template'

export function SavedTemplates() {
  const { data, isLoading, isError, refetch } = useTemplates()
  const openTemplate = useEditorStore((state) => state.openTemplate)
  const saveTemplate = useSaveTemplate()
  const queryClient = useQueryClient()
  const [pendingDelete, setPendingDelete] = useState<TemplateSummary | null>(null)

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.deleteTemplate(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: templateKeys.all })
      setPendingDelete(null)
    },
  })

  const handleOpen = async (templateId: string) => {
    const template = await api.getTemplate(templateId)
    openTemplate(template)
  }

  return (
    <section className="border-border flex max-h-50 w-full shrink-0 flex-col border-t bg-[#F8FBFF] px-4 py-2.5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Folder className="text-primary h-4 w-4 shrink-0" />
          <h2 className="text-foreground text-[13px] font-semibold whitespace-nowrap">Saved Templates</h2>
          <p className="text-muted truncate text-[11px]">Access and manage your saved templates.</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-7 shrink-0 px-2.5 text-[12px]"
          isLoading={saveTemplate.isPending}
          onClick={() => saveTemplate.mutate()}>
          <Plus className="h-3.5 w-3.5" />
          Save Current as Template
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-1.5">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="border-border h-11 animate-pulse rounded-lg border bg-white" />
          ))}
        </div>
      ) : null}

      {isError ? (
        <div className="border-border flex items-center justify-between gap-3 rounded-lg border bg-white px-3 py-2">
          <p className="text-muted text-[12px]">We couldn&apos;t load your templates.</p>
          <Button size="sm" className="h-7 shrink-0 px-2.5 text-[12px]" onClick={() => void refetch()}>
            Try Again
          </Button>
        </div>
      ) : null}

      {!isLoading && !isError && (data?.length ?? 0) === 0 ? (
        <div className="border-border flex items-center rounded-lg border border-dashed bg-white px-3 py-2.5">
          <p className="text-muted text-[12px]">
            No saved templates yet. Save your current document to create your first reusable template.
          </p>
        </div>
      ) : null}

      {!isLoading && !isError && data && data.length > 0 ? (
        <div className="min-h-0 flex-1 space-y-1.5 overflow-y-auto">
          {data.map((template) => (
            <article
              key={template.id}
              className="border-border flex items-center gap-2.5 rounded-lg border bg-white px-3 py-1.5">
              <div className="bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]">
                <FileText className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-foreground truncate text-[13px] font-semibold">{template.name}</h3>
                <p className="text-muted truncate text-[11px]">
                  Modified {format(new Date(template.updatedAt), 'MMM d, yyyy')} ·{' '}
                  {format(new Date(template.updatedAt), 'h:mm a')} · Created{' '}
                  {format(new Date(template.createdAt), 'MMM d, yyyy')}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <Button size="sm" className="h-7 px-2.5 text-[12px]" onClick={() => void handleOpen(template.id)}>
                  Open
                </Button>
                <button
                  type="button"
                  aria-label={`Delete ${template.name}`}
                  className="text-muted hover:bg-surface-muted hover:text-danger rounded-md p-1"
                  onClick={() => setPendingDelete(template)}>
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      <Modal
        open={pendingDelete !== null}
        title="Delete template"
        confirmLabel="Delete"
        danger
        onClose={() => setPendingDelete(null)}
        onConfirm={() => {
          if (pendingDelete) {
            deleteMutation.mutate(pendingDelete.id)
          }
        }}>
        {pendingDelete ? `Delete “${pendingDelete.name}”? This cannot be undone.` : null}
      </Modal>
    </section>
  )
}
