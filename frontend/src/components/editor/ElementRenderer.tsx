"use client";

import { memo } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import { MoveHandle } from "@/components/editor/MoveHandle";
import { ImageElement } from "@/components/elements/ImageElement";
import { ShapeElement } from "@/components/elements/ShapeElement";
import { TableElement } from "@/components/elements/TableElement";
import { TextElement } from "@/components/elements/TextElement";
import { cn } from "@/lib/cn";
import type { DragHandleProps } from "@/lib/drag-handle";
import { scaleDragTransform } from "@/lib/dnd-transform";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useEditorStore } from "@/store/editor.store";
import { useUiStore } from "@/store/ui.store";

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
  const zoom = useUiStore((state) => state.zoom);
  const mounted = useHasMounted();
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `element:${elementId}`,
      disabled: !interactive || Boolean(element?.locked),
    });

  if (!element || !element.visible) {
    return null;
  }

  const dragHandleProps =
    listeners != null
      ? ({ ...attributes, ...listeners } as DragHandleProps)
      : undefined;
  const usesDedicatedHandle =
    element.type === "text" || element.type === "table";

  return (
    <div
      ref={setNodeRef}
      suppressHydrationWarning
      role={interactive && !usesDedicatedHandle ? "button" : undefined}
      tabIndex={interactive && !usesDedicatedHandle ? 0 : undefined}
      onClick={(event) => {
        if (!interactive) {
          return;
        }

        event.stopPropagation();
        selectElement(element.id);
      }}
      onKeyDown={(event) => {
        if (!interactive || usesDedicatedHandle) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectElement(element.id);
        }
      }}
      className={cn(
        "group absolute",
        interactive && !usesDedicatedHandle && "cursor-grab",
        interactive && !selected && "hover:ring-1 hover:ring-primary/30",
        selected && interactive && "ring-2 ring-primary ring-offset-2",
        isDragging && "z-50 cursor-grabbing",
      )}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        zIndex: isDragging ? 50 : element.zIndex,
        transform: CSS.Translate.toString(scaleDragTransform(transform, zoom)),
      }}
      {...(interactive && !usesDedicatedHandle && mounted
        ? dragHandleProps
        : undefined)}
    >
      {interactive && element.type === "text" && !element.locked ? (
        <MoveHandle
          dragHandleProps={dragHandleProps}
          className={cn(
            "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
            selected && "opacity-100",
          )}
        />
      ) : null}
      {element.type === "text" ? (
        <TextElement element={element} interactive={interactive} />
      ) : null}
      {element.type === "table" ? (
        <TableElement
          element={element}
          interactive={interactive}
          selected={selected}
          dragHandleProps={interactive ? dragHandleProps : undefined}
        />
      ) : null}
      {element.type === "image" ? <ImageElement element={element} /> : null}
      {element.type === "shape" ? <ShapeElement element={element} /> : null}
    </div>
  );
});
