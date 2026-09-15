"use client";

import { memo } from "react";
import { ImageElement } from "@/components/elements/ImageElement";
import { ShapeElement } from "@/components/elements/ShapeElement";
import { TableElement } from "@/components/elements/TableElement";
import { TextElement } from "@/components/elements/TextElement";
import { cn } from "@/lib/cn";
import { addTableRow } from "@/lib/document-utils";
import { useEditorStore } from "@/store/editor.store";

interface ElementRendererProps {
  elementId: string;
  interactive: boolean;
}

export const ElementRenderer = memo(function ElementRenderer({
  elementId,
  interactive,
}: ElementRendererProps) {
  const element = useEditorStore((state) => {
    const tab = state.tabs.find((item) => item.id === state.activeTabId);
    if (!tab) {
      return null;
    }

    const page = tab.document.pages.find((item) => item.id === tab.activePageId);
    return page?.elements.find((item) => item.id === elementId) ?? null;
  });
  const selected = useEditorStore((state) => {
    const tab = state.tabs.find((item) => item.id === state.activeTabId);
    return tab?.selectedElementId === elementId;
  });
  const selectElement = useEditorStore((state) => state.selectElement);

  if (!element || !element.visible) {
    return null;
  }

  return (
    <div
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={(event) => {
        if (!interactive) {
          return;
        }

        event.stopPropagation();
        selectElement(element.id);
      }}
      onKeyDown={(event) => {
        if (!interactive) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectElement(element.id);
        }
      }}
      className={cn(
        "absolute",
        interactive && "cursor-pointer",
        selected && interactive && "ring-2 ring-primary ring-offset-2",
      )}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        zIndex: element.zIndex,
      }}
    >
      {element.type === "text" ? <TextElement element={element} /> : null}
      {element.type === "table" ? (
        <TableElement
          element={element}
          interactive={interactive}
          selected={selected}
          onAddRow={() => {
            useEditorStore.getState().updateElement(element.id, (current) =>
              current.type === "table" ? addTableRow(current) : current,
            );
          }}
        />
      ) : null}
      {element.type === "image" ? <ImageElement element={element} /> : null}
      {element.type === "shape" ? <ShapeElement element={element} /> : null}
    </div>
  );
});
