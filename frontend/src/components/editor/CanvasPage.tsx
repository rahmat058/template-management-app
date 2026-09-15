"use client";

import { ElementRenderer } from "@/components/editor/ElementRenderer";
import { useEditorStore } from "@/store/editor.store";
import { useUiStore } from "@/store/ui.store";

interface CanvasPageProps {
  interactive: boolean;
}

export function CanvasPage({ interactive }: CanvasPageProps) {
  const page = useEditorStore((state) => state.getActivePage());
  const selectElement = useEditorStore((state) => state.selectElement);
  const setActiveTool = useUiStore((state) => state.setActiveTool);

  if (!page) {
    return (
      <div className="flex h-[640px] w-[480px] items-center justify-center rounded-[8px] bg-white text-sm text-muted shadow-sm">
        No page selected
      </div>
    );
  }

  return (
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
}
