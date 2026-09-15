"use client";

import { memo } from "react";
import type { TextElement as TextElementModel } from "@/types/element";
import { useEditorStore } from "@/store/editor.store";

interface TextElementProps {
  element: TextElementModel;
  interactive: boolean;
}

export const TextElement = memo(function TextElement({
  element,
  interactive,
}: TextElementProps) {
  return (
    <div
      className="h-full w-full overflow-hidden whitespace-pre-wrap break-words"
      style={{
        fontFamily: element.text.fontFamily,
        fontSize: element.text.fontSize,
        fontWeight: element.text.fontWeight,
        color: element.text.color,
        textAlign: element.text.align,
        lineHeight: 1.4,
      }}
    >
      {interactive ? (
        <textarea
          data-no-dnd="true"
          aria-label="Text content"
          value={element.text.content}
          onFocus={() => useEditorStore.getState().selectElement(element.id)}
          onChange={(event) =>
            useEditorStore.getState().updateElement(element.id, (current) =>
              current.type === "text"
                ? {
                    ...current,
                    text: { ...current.text, content: event.target.value },
                  }
                : current,
            )
          }
          className="canvas-text-input h-full w-full resize-none overflow-hidden bg-transparent outline-none"
          style={{
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            color: "inherit",
            textAlign: "inherit",
            lineHeight: "inherit",
          }}
        />
      ) : (
        element.text.content
      )}
    </div>
  );
});
