'use client'

import { api } from '@/lib/api'
import { format } from 'date-fns'
import { memo, useCallback, useRef, useState } from 'react'
import { FileText, Folder, MoreHorizontal, Plus } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { useSaveTemplate } from '@/hooks/useSaveTemplate'
import { useTemplates } from '@/hooks/useTemplates'
import { templateKeys } from '@/lib/query-keys'
import { useEditorStore } from '@/store/editor.store'
import type { TemplateSummary } from '@/types/template'

export function SavedTemplates() {
  const { data, isLoading, isError, refetch } = useTemplates()
  const openTemplate = useEditorStore((state) => state.openTemplate)
  const saveTemplate = useSaveTemplate()
  const queryClient = useQueryClient()
  const [pendingDelete, setPendingDelete] = useState<TemplateSummary | null>(null)
  const [deleteError, setDeleteError] = useState<string | null>(null)
  const [openingId, setOpeningId] = useState<string | null>(null)
  const [openError, setOpenError] = useState<string | null>(null)
  const openRequestRef = useRef(0)

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.deleteTemplate(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: templateKeys.all })
      setPendingDelete(null)
    },
    onError: (error: unknown) => {
      setDeleteError(error instanceof Error ? error.message : 'Could not delete the template.')
    },
  })

  const handleOpen = useCallback(
    async (templateId: string) => {
      // Ignore any response that is no longer the most recent request, otherwise a slow first
      // click can land after a faster second one and open the wrong document.
      const requestId = openRequestRef.current + 1
      openRequestRef.current = requestId

      setOpeningId(templateId)
      setOpenError(null)

      try {
        const template = await api.getTemplate(templateId)

        if (openRequestRef.current === requestId) {
          openTemplate(template)
        }
      } catch (error) {
        if (openRequestRef.current === requestId) {
          setOpenError(error instanceof Error ? error.message : 'Could not open the template.')
        }
      } finally {
        if (openRequestRef.current === requestId) {
          setOpeningId(null)
        }
      }
    },
    [openTemplate],
  )

  const requestDelete = useCallback((template: TemplateSummary) => {
    setDeleteError(null)
    setPendingDelete(template)
  }, [])

  const closeDeleteModal = useCallback(() => {
    setDeleteError(null)
    setPendingDelete(null)
  }, [])

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

      {openError ? (
        <div className="border-danger/40 text-danger mb-1.5 rounded-lg border bg-white px-3 py-1.5 text-[12px]">
          {openError}
        </div>
      ) : null}

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
            <TemplateRow
              key={template.id}
              template={template}
              isOpening={openingId === template.id}
              onOpen={handleOpen}
              onDelete={requestDelete}
            />
          ))}
        </div>
      ) : null}

      <Modal
        open={pendingDelete !== null}
        title="Delete template"
        confirmLabel="Delete"
        danger
        confirmLoading={deleteMutation.isPending}
        onClose={closeDeleteModal}
        onConfirm={() => {
          if (pendingDelete) {
            deleteMutation.mutate(pendingDelete.id)
          }
        }}>
        {pendingDelete ? (
          <div className="space-y-2">
            <p>{`Delete “${pendingDelete.name}”? This cannot be undone.`}</p>
            {deleteError ? <p className="text-danger text-[12px]">{deleteError}</p> : null}
          </div>
        ) : null}
      </Modal>
    </section>
  )
}

interface TemplateRowProps {
  template: TemplateSummary
  isOpening: boolean
  onOpen: (templateId: string) => void
  onDelete: (template: TemplateSummary) => void
}

const TemplateRow = memo(function TemplateRow({ template, isOpening, onOpen, onDelete }: TemplateRowProps) {
  const updatedAt = new Date(template.updatedAt)
  const modifiedDate = format(updatedAt, 'MMM d, yyyy')
  const modifiedTime = format(updatedAt, 'h:mm a')
  const createdDate = format(new Date(template.createdAt), 'MMM d, yyyy')

  return (
    <article className="border-border flex items-center gap-2.5 rounded-lg border bg-white px-3 py-1.5">
      <div className="bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]">
        <FileText className="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-foreground truncate text-[13px] font-semibold">{template.name}</h3>
        <p className="text-muted truncate text-[11px]">
          Modified {modifiedDate} · {modifiedTime} · Created {createdDate}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <Button size="sm" className="h-7 px-2.5 text-[12px]" isLoading={isOpening} onClick={() => onOpen(template.id)}>
          Open
        </Button>
        <button
          type="button"
          aria-label={`Delete ${template.name}`}
          className="text-muted hover:bg-surface-muted hover:text-danger rounded-md p-1"
          onClick={() => onDelete(template)}>
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
})
