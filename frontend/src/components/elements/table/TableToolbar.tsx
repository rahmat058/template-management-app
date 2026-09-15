"use client";

import { List, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { useHasMounted } from "@/hooks/useHasMounted";
import type { DragHandleProps } from "@/lib/drag-handle";

interface TableToolbarProps {
  interactive: boolean;
  dragHandleProps?: DragHandleProps;
  onAddColumn?: () => void;
  onDeleteColumn?: () => void;
}

export function TableToolbar({
  interactive,
  dragHandleProps,
  onAddColumn,
  onDeleteColumn,
}: TableToolbarProps) {
  const mounted = useHasMounted();

  return (
    <div
      className={cn(
        "mb-2 flex items-center justify-between rounded-[12px] bg-[#EEF4FF] px-3 py-2",
        interactive && "cursor-grab active:cursor-grabbing",
      )}
      suppressHydrationWarning
      {...(mounted ? dragHandleProps : undefined)}
    >
      <div className="flex items-center gap-2 text-primary">
        <List className="h-4 w-4" />
        <p className="text-[12px] font-bold tracking-[0.04em]">QUOTATION ITEMS</p>
      </div>
      {interactive ? (
        <div className="flex items-center gap-1.5" data-no-dnd="true">
          <button
            type="button"
            className="inline-flex h-7 items-center gap-1 rounded-full bg-white px-2.5 text-[11px] font-semibold text-primary shadow-sm hover:bg-primary/5"
            onClick={(event) => {
              event.stopPropagation();
              onAddColumn?.();
            }}
          >
            <Plus className="h-3.5 w-3.5" />
            Add Column
          </button>
          <button
            type="button"
            aria-label="Delete column"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted shadow-sm hover:bg-danger/10 hover:text-danger"
            onClick={(event) => {
              event.stopPropagation();
              onDeleteColumn?.();
            }}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
