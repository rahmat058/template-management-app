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
    <section className="border-border flex max-h-[280px] min-h-[168px] shrink-0 flex-col border-t bg-[#F8FBFF] px-3 py-3">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-start gap-2">
          <Folder className="text-primary mt-0.5 h-4 w-4 shrink-0" />
          <div className="min-w-0">
            <h2 className="text-foreground text-[13px] font-semibold">Saved Templates</h2>
            <p className="text-muted text-[11px] leading-4">Access and manage your saved templates.</p>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="mb-2 w-full shrink-0 text-[12px]"
        isLoading={saveTemplate.isPending}
        onClick={() => saveTemplate.mutate()}>
        <Plus className="h-3.5 w-3.5" />
        Save Current as Template
      </Button>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="border-border h-[72px] animate-pulse rounded-[10px] border bg-white" />
          ))}
        </div>
      ) : null}

      {isError ? (
        <div className="border-border flex flex-col gap-2 rounded-[10px] border bg-white px-3 py-3">
          <p className="text-muted text-[12px]">We couldn&apos;t load your templates.</p>
          <Button size="sm" onClick={() => void refetch()}>
            Try Again
          </Button>
        </div>
      ) : null}

      {!isLoading && !isError && (data?.length ?? 0) === 0 ? (
        <div className="border-border flex min-h-[72px] items-center rounded-[10px] border border-dashed bg-white px-3">
          <p className="text-muted text-[12px] leading-5">
            No saved templates yet. Save your current document to create your first reusable template.
          </p>
        </div>
      ) : null}

      {!isLoading && !isError && data && data.length > 0 ? (
        <div className="min-h-0 flex-1 space-y-2 overflow-y-auto">
          {data.map((template) => (
            <article key={template.id} className="border-border rounded-[10px] border bg-white px-3 py-2.5">
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px]">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground truncate text-[13px] font-semibold">{template.name}</h3>
                  <p className="text-muted text-[11px]">
                    Modified {format(new Date(template.updatedAt), 'MMM d, yyyy')} ·{' '}
                    {format(new Date(template.updatedAt), 'h:mm a')}
                  </p>
                  <p className="text-muted text-[11px]">
                    Created {format(new Date(template.createdAt), 'MMM d, yyyy')}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-end gap-1">
                <Button size="sm" className="h-7 px-2.5 text-[12px]" onClick={() => void handleOpen(template.id)}>
                  Open
                </Button>
                <button
                  type="button"
                  aria-label={`Delete ${template.name}`}
                  className="text-muted hover:bg-surface-muted hover:text-danger rounded-[6px] p-1"
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
