"use client";

import { SlidersHorizontal } from "lucide-react";
import { SavedTemplates } from "@/components/editor/SavedTemplates";
import { ElementActions } from "@/components/editor/properties/ElementActions";
import { ImageSettings } from "@/components/editor/properties/ImageSettings";
import { PageSettings } from "@/components/editor/properties/PageSettings";
import { ShapeSettings } from "@/components/editor/properties/ShapeSettings";
import { TableSettings } from "@/components/editor/properties/TableSettings";
import { TextSettings } from "@/components/editor/properties/TextSettings";
import { useEditorSelection } from "@/hooks/useEditorSelection";
import { isCompanyLogo } from "@/lib/company-logo";
import type { DocumentElement } from "@/types/element";

export function PropertiesPanel() {
  const element = useEditorSelection();

  return (
    <aside className="flex w-[320px] shrink-0 flex-col overflow-hidden border-l border-border bg-surface">
      <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-3">
        <SlidersHorizontal className="h-4 w-4 text-primary" />
        <h2 className="text-[13px] font-semibold text-foreground">
          Properties & Data
        </h2>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
        {element ? <SelectedElementSettings element={element} /> : <PageSettings />}
        {element ? <ElementActions /> : null}
      </div>
      <SavedTemplates />
    </aside>
  );
}

function SelectedElementSettings({ element }: { element: DocumentElement }) {
  if (element.type === "text") {
    return <TextSettings element={element} />;
  }

  if (element.type === "table") {
    return <TableSettings element={element} />;
  }

  if (element.type === "image" || isCompanyLogo(element.id)) {
    return <ImageSettings element={element} />;
  }

  if (element.type === "shape") {
    return <ShapeSettings element={element} />;
  }

  return null;
}
