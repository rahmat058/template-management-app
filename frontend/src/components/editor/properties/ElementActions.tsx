"use client";

import { Trash2 } from "lucide-react";
import { PanelAction } from "@/components/editor/properties/PanelAction";
import { SectionTitle } from "@/components/editor/properties/SectionTitle";
import { useEditorStore } from "@/store/editor.store";

export function ElementActions() {
  const removeSelectedElement = useEditorStore(
    (state) => state.removeSelectedElement,
  );

  return (
    <section className="rounded-[12px] border border-border p-3">
      <SectionTitle title="Element" />
      <div className="mt-3">
        <PanelAction
          icon={<Trash2 className="h-3.5 w-3.5" />}
          label="Delete"
          danger
          onClick={removeSelectedElement}
        />
      </div>
    </section>
  );
}
