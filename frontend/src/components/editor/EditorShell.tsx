"use client";

import { Canvas } from "@/components/editor/Canvas";
import { EditorHeader } from "@/components/editor/EditorHeader";
import { PreviewMode } from "@/components/editor/PreviewMode";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { TemplateTabs } from "@/components/editor/TemplateTabs";
import { Toolbox } from "@/components/editor/Toolbox";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useEditorStore } from "@/store/editor.store";

export function EditorShell() {
  useKeyboardShortcuts();
  const mode = useEditorStore((state) => state.mode);

  if (mode === "preview") {
    return (
      <div className="flex h-screen flex-col overflow-hidden bg-background">
        <PreviewMode />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      <EditorHeader />
      <TemplateTabs />
      <div className="flex min-h-0 flex-1">
        <Toolbox />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}
