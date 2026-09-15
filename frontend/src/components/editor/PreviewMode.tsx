"use client";

import { Button } from "@/components/ui/Button";
import { Canvas } from "@/components/editor/Canvas";
import { useEditorStore } from "@/store/editor.store";

export function PreviewMode() {
  const setMode = useEditorStore((state) => state.setMode);

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-workspace">
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
        <h1 className="text-[16px] font-semibold text-foreground">Preview</h1>
        <Button onClick={() => setMode("edit")}>Back to Edit</Button>
      </div>
      <Canvas interactive={false} />
    </div>
  );
}
