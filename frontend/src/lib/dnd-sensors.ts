import { PointerSensor } from "@dnd-kit/core";
import type { PointerEvent } from "react";

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(
    target.closest(
      'input, textarea, select, a, [contenteditable="true"], [data-no-dnd="true"]',
    ),
  );
}

export class EditorPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: "onPointerDown" as const,
      handler: ({ nativeEvent }: PointerEvent) =>
        !isInteractiveTarget(nativeEvent.target),
    },
  ];
}
