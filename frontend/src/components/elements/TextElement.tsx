"use client";

import { memo } from "react";
import type { TextElement as TextElementModel } from "@/types/element";

interface TextElementProps {
  element: TextElementModel;
}

export const TextElement = memo(function TextElement({
  element,
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
      {element.text.content}
    </div>
  );
});
