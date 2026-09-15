"use client";

import {
  DndContext,
  type DragEndEvent,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ElementRenderer } from "@/components/editor/ElementRenderer";
import { EditorPointerSensor } from "@/lib/dnd-sensors";
import { useEditorStore } from "@/store/editor.store";
import { useUiStore } from "@/store/ui.store";

interface CanvasPageProps {
  interactive: boolean;
}

export function CanvasPage({ interactive }: CanvasPageProps) {
  const page = useEditorStore((state) => state.getActivePage());
  const selectElement = useEditorStore((state) => state.selectElement);
  const moveElement = useEditorStore((state) => state.moveElement);
  const setActiveTool = useUiStore((state) => state.setActiveTool);
  const sensors = useSensors(
    useSensor(EditorPointerSensor, { activationConstraint: { distance: 6 } }),
  );

  if (!page) {
    return (
      <div className="flex h-[640px] w-[480px] items-center justify-center rounded-[8px] bg-white text-sm text-muted shadow-sm">
        No page selected
      </div>
    );
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const id = String(event.active.id);
    if (!id.startsWith("element:")) {
      return;
    }

    const elementId = id.slice("element:".length);
    const currentPage = useEditorStore.getState().getActivePage();
    const element = currentPage?.elements.find((item) => item.id === elementId);
    if (!element) {
      return;
    }

    const zoom = useUiStore.getState().zoom || 1;
    moveElement(
      elementId,
      element.x + event.delta.x / zoom,
      element.y + event.delta.y / zoom,
    );
  };

  const pageNode = (
    <div
      className="relative shrink-0 overflow-hidden rounded-[2px] shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
      style={{
        width: page.width,
        height: page.height,
        background: page.background,
      }}
      onClick={() => {
        if (interactive) {
          selectElement(null);
          setActiveTool("select");
        }
      }}
    >
      {page.elements.map((element) => (
        <ElementRenderer
          key={element.id}
          elementId={element.id}
          interactive={interactive}
        />
      ))}
    </div>
  );

  if (!interactive) {
    return pageNode;
  }

  return (
    <DndContext sensors={sensors} autoScroll={false} onDragEnd={handleDragEnd}>
      {pageNode}
    </DndContext>
  );
}
