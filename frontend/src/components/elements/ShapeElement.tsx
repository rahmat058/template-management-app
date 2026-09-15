"use client";

import { memo } from "react";
import type { ShapeElement as ShapeElementModel } from "@/types/element";

interface ShapeElementProps {
  element: ShapeElementModel;
}

export const ShapeElement = memo(function ShapeElement({
  element,
}: ShapeElementProps) {
  const { shape } = element;

  if (shape.kind === "line") {
    return (
      <div
        className="h-full w-full"
        style={{
          background: shape.fill,
          borderRadius: shape.borderRadius,
        }}
      />
    );
  }

  if (shape.kind === "circle") {
    return (
      <div
        className="h-full w-full"
        style={{
          background: shape.fill,
          border: `${shape.borderWidth}px solid ${shape.borderColor}`,
          borderRadius: "999px",
        }}
      />
    );
  }

  return (
    <div
      className="h-full w-full"
      style={{
        background: shape.fill,
        border: `${shape.borderWidth}px solid ${shape.borderColor}`,
        borderRadius: shape.borderRadius,
      }}
    />
  );
});
