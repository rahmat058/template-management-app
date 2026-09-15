"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { useEditorStore } from "@/store/editor.store";

export function PageThumbnails() {
  const pages = useEditorStore(
    (state) => state.getActiveTab()?.document.pages ?? [],
  );
  const activePageId = useEditorStore(
    (state) => state.getActiveTab()?.activePageId,
  );
  const addPage = useEditorStore((state) => state.addPage);
  const setActivePage = useEditorStore((state) => state.setActivePage);

  return (
    <section className="mt-auto border-t border-toolbox-border p-3">
      <h2 className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-toolbox-subtle">
        Pages
      </h2>
      <div className="flex flex-col gap-2">
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            onClick={() => setActivePage(page.id)}
            className={cn(
              "rounded-[10px] border p-2 text-left transition-colors",
              page.id === activePageId
                ? "border-primary bg-primary/20"
                : "border-toolbox-border hover:bg-toolbox-muted",
            )}
          >
            <div className="relative mb-2 h-[70px] overflow-hidden rounded-[6px] bg-white">
              <div
                className="origin-top-left bg-white"
                style={{
                  width: page.width,
                  height: page.height,
                  transform: `scale(${72 / page.height})`,
                }}
              >
                {page.elements.slice(0, 8).map((element) => (
                  <div
                    key={element.id}
                    className="absolute bg-slate-200"
                    style={{
                      left: element.x,
                      top: element.y,
                      width: element.width,
                      height: Math.min(element.height, 48),
                    }}
                  />
                ))}
              </div>
              <span className="absolute bottom-1 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-semibold text-white">
                {index + 1}
              </span>
            </div>
          </button>
        ))}
        <button
          type="button"
          onClick={addPage}
          className="flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-toolbox-border text-[12px] font-medium text-toolbox-text hover:bg-toolbox-muted"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Page
        </button>
      </div>
    </section>
  );
}
