"use client";

import { Input } from "@/components/ui/Input";
import { SectionTitle } from "@/components/editor/properties/SectionTitle";
import { toColorInput } from "@/components/editor/properties/color";
import { useEditorStore } from "@/store/editor.store";

export function PageSettings() {
  const page = useEditorStore((state) => state.getActivePage());
  const updatePage = useEditorStore((state) => state.updatePage);

  if (!page) {
    return (
      <p className="rounded-[10px] border border-dashed border-border bg-surface-muted px-4 py-6 text-center text-[13px] leading-6 text-muted">
        No page selected.
      </p>
    );
  }

  return (
    <section className="rounded-[12px] border border-border p-3">
      <SectionTitle title="Page Settings" />
      <p className="mt-1 text-[11px] leading-4 text-muted">
        Select an element to edit its properties, or change the page background here.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Input label="Width" type="number" value={page.width} readOnly />
        <Input label="Height" type="number" value={page.height} readOnly />
        <label className="col-span-2 flex flex-col gap-1.5">
          <span className="text-[12px] font-medium text-muted">Background</span>
          <span className="flex h-9 items-center gap-2 rounded-[8px] border border-border px-2">
            <input
              type="color"
              value={toColorInput(page.background)}
              onChange={(event) =>
                updatePage((current) => ({
                  ...current,
                  background: event.target.value,
                }))
              }
              className="h-5 w-5 cursor-pointer rounded border-0 bg-transparent p-0"
            />
            <span className="text-[12px] text-foreground">{page.background}</span>
          </span>
        </label>
      </div>
    </section>
  );
}
