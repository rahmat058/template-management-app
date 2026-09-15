"use client";

import { memo } from "react";
import { GripVertical, Plus } from "lucide-react";
import type { TableElement as TableElementModel } from "@/types/element";
import { cn } from "@/lib/cn";

interface TableElementProps {
  element: TableElementModel;
  interactive: boolean;
  selected: boolean;
  onAddRow?: () => void;
}

export const TableElement = memo(function TableElement({
  element,
  interactive,
  selected,
  onAddRow,
}: TableElementProps) {
  const { table } = element;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[12px] bg-[#F8FBFF] p-3">
      {selected && interactive ? (
        <div className="mb-2 flex items-center justify-between rounded-[10px] bg-primary px-3 py-2 text-white">
          <p className="text-[12px] font-semibold tracking-wide">
            QUOTATION ITEMS
          </p>
          <span className="text-[11px] opacity-80">Table</span>
        </div>
      ) : null}
      <div className="min-h-0 flex-1 overflow-hidden">
        <table className="w-full border-separate text-left text-[12px] text-foreground" style={{ borderSpacing: `0 ${table.rowSpacing}px` }}>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={row.id}>
                {interactive ? (
                  <td className="w-6 pr-1 align-middle text-muted-foreground">
                    <GripVertical className="h-3.5 w-3.5" />
                  </td>
                ) : null}
                {row.cells.map((cell) => (
                  <td
                    key={cell.id}
                    className={cn(
                      "align-middle",
                      rowIndex === 0
                        ? "font-semibold text-muted"
                        : "bg-white text-foreground",
                    )}
                    style={{
                      padding: table.cellPadding,
                      borderRadius: rowIndex === 0 ? 0 : 10,
                      width: `${100 / table.columns}%`,
                    }}
                  >
                    {cell.value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {interactive ? (
        <button
          type="button"
          className="mt-2 inline-flex h-8 items-center justify-center gap-1 self-start rounded-full bg-primary px-3 text-[12px] font-medium text-white hover:bg-primary-hover"
          onClick={(event) => {
            event.stopPropagation();
            onAddRow?.();
          }}
        >
          <Plus className="h-3.5 w-3.5" />
          Add Row
        </button>
      ) : null}
    </div>
  );
});
