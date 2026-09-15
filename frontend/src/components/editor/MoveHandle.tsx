"use client";

import { GripVertical } from "lucide-react";
import { cn } from "@/lib/cn";
import { useHasMounted } from "@/hooks/useHasMounted";
import type { DragHandleProps } from "@/lib/drag-handle";

interface MoveHandleProps {
  dragHandleProps?: DragHandleProps;
  className?: string;
}

export function MoveHandle({ dragHandleProps, className }: MoveHandleProps) {
  const mounted = useHasMounted();

  return (
    <button
      type="button"
      aria-label="Move element"
      suppressHydrationWarning
      className={cn(
        "absolute -left-6 top-0 z-10 flex h-6 w-5 cursor-grab items-center justify-center rounded-[6px] border border-border bg-surface text-muted shadow-sm hover:text-primary active:cursor-grabbing",
        className,
      )}
      onClick={(event) => event.stopPropagation()}
      {...(mounted ? dragHandleProps : undefined)}
    >
      <GripVertical className="h-3.5 w-3.5" />
    </button>
  );
}
