"use client";

import { memo } from "react";
import type { ImageElement as ImageElementModel } from "@/types/element";

interface ImageElementProps {
  element: ImageElementModel;
}

export const ImageElement = memo(function ImageElement({
  element,
}: ImageElementProps) {
  if (!element.image.src) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-[8px] border border-dashed border-border-strong bg-surface-muted text-[12px] text-muted">
        {element.image.alt || "Image placeholder"}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={element.image.src}
      alt={element.image.alt ?? ""}
      className="h-full w-full"
      style={{ objectFit: element.image.objectFit }}
    />
  );
});
