"use client";

import { Canvas } from "@/components/editor/Canvas";
import { EditorHeader } from "@/components/editor/EditorHeader";
import { PreviewMode } from "@/components/editor/PreviewMode";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { TemplateTabs } from "@/components/editor/TemplateTabs";
import { Toolbox } from "@/components/editor/Toolbox";
import { Button } from "@/components/ui/Button";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useHydrateTemplate1 } from "@/hooks/useHydrateTemplate1";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useEditorStore } from "@/store/editor.store";

export function EditorShell() {
  useKeyboardShortcuts();
  const hasMounted = useHasMounted();
  const { isReady, error, retry } = useHydrateTemplate1();
  const mode = useEditorStore((state) => state.mode);

  if (!hasMounted || !isReady) {
    return <EditorShellFallback />;
  }

  if (mode === "preview") {
    return (
      <div className="flex h-screen flex-col overflow-hidden bg-background">
        {error ? <HydrationErrorBanner message={error} onRetry={retry} /> : null}
        <PreviewMode />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      {error ? <HydrationErrorBanner message={error} onRetry={retry} /> : null}
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

function HydrationErrorBanner({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-danger/20 bg-danger/5 px-4 py-2">
      <p className="text-[12px] text-danger">
        {message} Showing the default document instead.
      </p>
      <Button size="sm" variant="outline" onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}

function EditorShellFallback() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      <div className="h-[60px] border-b border-border bg-surface" />
      <div className="h-[44px] border-b border-border bg-surface" />
      <div className="flex min-h-0 flex-1">
        <div className="w-[240px] shrink-0 bg-toolbox" />
        <div className="flex flex-1 items-center justify-center bg-surface-muted">
          <p className="text-[13px] text-muted">Loading template...</p>
        </div>
        <div className="w-[320px] shrink-0 border-l border-border bg-surface" />
      </div>
    </div>
  );
}
