"use client";

import { format } from "date-fns";
import { FileText, Folder, MoreHorizontal, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useSaveTemplate } from "@/hooks/useSaveTemplate";
import { useTemplates } from "@/hooks/useTemplates";
import { api } from "@/lib/api";
import { templateKeys } from "@/lib/query-keys";
import { useEditorStore } from "@/store/editor.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TemplateSummary } from "@/types/template";

export function SavedTemplates() {
  const { data, isLoading, isError, refetch } = useTemplates();
  const openTemplate = useEditorStore((state) => state.openTemplate);
  const saveTemplate = useSaveTemplate();
  const queryClient = useQueryClient();
  const [pendingDelete, setPendingDelete] = useState<TemplateSummary | null>(
    null,
  );

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.deleteTemplate(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: templateKeys.all });
      setPendingDelete(null);
    },
  });

  const handleOpen = async (templateId: string) => {
    const template = await api.getTemplate(templateId);
    openTemplate(template);
  };

  return (
    <section className="h-[168px] shrink-0 border-t border-border bg-surface px-4 py-3">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Folder className="h-4 w-4 text-primary" />
          <div>
            <h2 className="text-[13px] font-semibold text-foreground">
              Saved Templates
            </h2>
            <p className="text-[11px] text-muted">
              Access and manage your saved templates.
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          isLoading={saveTemplate.isPending}
          onClick={() => saveTemplate.mutate()}
        >
          <Plus className="h-3.5 w-3.5" />
          Save Current as Template
        </Button>
      </div>

      {isLoading ? (
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-[88px] w-full max-w-xl shrink-0 animate-pulse rounded-[10px] border border-border bg-surface-muted"
            />
          ))}
        </div>
      ) : null}

      {isError ? (
        <div className="flex h-[88px] items-center justify-between rounded-[10px] border border-border px-4">
          <p className="text-[13px] text-muted">
            We couldn&apos;t load your templates.
          </p>
          <Button size="sm" onClick={() => void refetch()}>
            Try Again
          </Button>
        </div>
      ) : null}

      {!isLoading && !isError && (data?.length ?? 0) === 0 ? (
        <div className="flex h-[88px] items-center rounded-[10px] border border-dashed border-border px-4">
          <p className="text-[13px] text-muted">
            No saved templates yet. Save your current document to create your
            first reusable template.
          </p>
        </div>
      ) : null}

      {!isLoading && !isError && data && data.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {data.map((template) => (
            <article
              key={template.id}
              className="flex h-[88px] min-w-[420px] flex-1 items-center justify-between rounded-[10px] border border-border bg-surface px-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-primary/10 text-primary">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-[13px] font-semibold text-foreground">
                    {template.name}
                  </h3>
                  <p className="text-[11px] text-muted">
                    Saved on {format(new Date(template.updatedAt), "yyyy-MM-dd")}{" "}
                    | {format(new Date(template.updatedAt), "h:mm a")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" onClick={() => void handleOpen(template.id)}>
                  Open
                </Button>
                <button
                  type="button"
                  aria-label={`Delete ${template.name}`}
                  className="rounded-[6px] p-1 text-muted hover:bg-surface-muted hover:text-danger"
                  onClick={() => setPendingDelete(template)}
                >
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
            deleteMutation.mutate(pendingDelete.id);
          }
        }}
      >
        {pendingDelete
          ? `Delete “${pendingDelete.name}”? This cannot be undone.`
          : null}
      </Modal>
    </section>
  );
}
