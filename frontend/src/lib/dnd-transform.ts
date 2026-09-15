import type { Transform } from "@dnd-kit/utilities";

export function scaleDragTransform(
  transform: Transform | null,
  zoom: number,
): Transform | null {
  if (!transform) {
    return null;
  }

  const scale = zoom || 1;
  return {
    ...transform,
    x: transform.x / scale,
    y: transform.y / scale,
  };
}
