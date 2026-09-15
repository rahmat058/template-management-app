"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import {
  applyResize,
  resizeCursor,
  type ElementBox,
  type ResizeHandle,
} from "@/lib/element-resize";
import { cn } from "@/lib/cn";
import { useEditorStore } from "@/store/editor.store";
import { useUiStore } from "@/store/ui.store";

const HANDLES: ResizeHandle[] = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];

const handlePosition: Record<ResizeHandle, string> = {
  nw: "-left-1.5 -top-1.5",
  n: "left-1/2 -top-1.5 -translate-x-1/2",
  ne: "-right-1.5 -top-1.5",
  e: "-right-1.5 top-1/2 -translate-y-1/2",
  se: "-right-1.5 -bottom-1.5",
  s: "left-1/2 -bottom-1.5 -translate-x-1/2",
  sw: "-left-1.5 -bottom-1.5",
  w: "-left-1.5 top-1/2 -translate-y-1/2",
};

interface ResizeHandlesProps {
  elementId: string;
  box: ElementBox;
  pageWidth: number;
  pageHeight: number;
}

export function ResizeHandles({
  elementId,
  box,
  pageWidth,
  pageHeight,
}: ResizeHandlesProps) {
  const resizeElement = useEditorStore((state) => state.resizeElement);
  const dragRef = useRef<{
    handle: ResizeHandle;
    startX: number;
    startY: number;
    startBox: ElementBox;
  } | null>(null);

  const onPointerDown = (
    event: ReactPointerEvent<HTMLButtonElement>,
    handle: ResizeHandle,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    dragRef.current = {
      handle,
      startX: event.clientX,
      startY: event.clientY,
      startBox: { ...box },
    };

    const target = event.currentTarget;
    target.setPointerCapture(event.pointerId);

    const onPointerMove = (moveEvent: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) {
        return;
      }

      const scale = useUiStore.getState().zoom || 1;
      const next = applyResize(
        drag.startBox,
        drag.handle,
        (moveEvent.clientX - drag.startX) / scale,
        (moveEvent.clientY - drag.startY) / scale,
        pageWidth,
        pageHeight,
      );
      resizeElement(elementId, next);
    };

    const onPointerUp = (upEvent: PointerEvent) => {
      dragRef.current = null;
      if (target.hasPointerCapture(upEvent.pointerId)) {
        target.releasePointerCapture(upEvent.pointerId);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <>
      {HANDLES.map((handle) => (
        <button
          key={handle}
          type="button"
          data-no-dnd="true"
          aria-label={`Resize ${handle}`}
          onPointerDown={(event) => onPointerDown(event, handle)}
          onClick={(event) => event.stopPropagation()}
          className={cn(
            "absolute z-20 h-3 w-3 rounded-xs border border-primary bg-white shadow-sm",
            handlePosition[handle],
          )}
          style={{ cursor: resizeCursor(handle) }}
        />
      ))}
    </>
  );
}
