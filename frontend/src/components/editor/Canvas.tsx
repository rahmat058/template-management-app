"use client";

import { Minus, Plus } from "lucide-react";
import { CanvasPage } from "@/components/editor/CanvasPage";
import { useUiStore } from "@/store/ui.store";

interface CanvasProps {
  interactive?: boolean;
}

export function Canvas({ interactive = true }: CanvasProps) {
  const zoom = useUiStore((state) => state.zoom);
  const setZoom = useUiStore((state) => state.setZoom);

  return (
    <section className="relative flex min-w-0 flex-1 flex-col bg-workspace">
      {interactive ? (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-[8px] border border-border bg-surface px-1 py-1 shadow-sm">
          <button
            type="button"
            aria-label="Zoom out"
            className="flex h-7 w-7 items-center justify-center rounded-[6px] text-muted hover:bg-surface-muted hover:text-foreground"
            onClick={() => setZoom(Math.max(0.5, Number((zoom - 0.1).toFixed(1))))}
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="min-w-[48px] text-center text-[12px] font-medium text-foreground">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            aria-label="Zoom in"
            className="flex h-7 w-7 items-center justify-center rounded-[6px] text-muted hover:bg-surface-muted hover:text-foreground"
            onClick={() => setZoom(Math.min(1.5, Number((zoom + 0.1).toFixed(1))))}
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : null}
      <div className="flex flex-1 items-start justify-center overflow-auto p-8">
        <div style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}>
          <CanvasPage interactive={interactive} />
        </div>
      </div>
    </section>
  );
}
