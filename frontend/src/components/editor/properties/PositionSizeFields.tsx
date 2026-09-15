"use client";

import { Input } from "@/components/ui/Input";
import { useEditorStore } from "@/store/editor.store";

interface PositionSizeFieldsProps {
  elementId: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export function PositionSizeFields({
  elementId,
  x,
  y,
  width,
  height,
}: PositionSizeFieldsProps) {
  const updateElement = useEditorStore((state) => state.updateElement);

  return (
    <div className="grid grid-cols-2 gap-3">
      <Input
        label="X"
        type="number"
        value={x}
        onChange={(event) =>
          updateElement(elementId, (current) => ({
            ...current,
            x: Number(event.target.value) || 0,
          }))
        }
      />
      <Input
        label="Y"
        type="number"
        value={y}
        onChange={(event) =>
          updateElement(elementId, (current) => ({
            ...current,
            y: Number(event.target.value) || 0,
          }))
        }
      />
      <Input
        label="Width"
        type="number"
        value={width}
        onChange={(event) =>
          updateElement(elementId, (current) => ({
            ...current,
            width: Number(event.target.value) || current.width,
          }))
        }
      />
      <Input
        label="Height"
        type="number"
        value={height}
        onChange={(event) =>
          updateElement(elementId, (current) => ({
            ...current,
            height: Number(event.target.value) || current.height,
          }))
        }
      />
    </div>
  );
}
