"use client";

import { memo } from "react";
import { GripVertical, List, Plus, Trash2 } from "lucide-react";
import type { TableElement as TableElementModel } from "@/types/element";
import { cn } from "@/lib/cn";

interface TableElementProps {
  element: TableElementModel;
  interactive: boolean;
  selected: boolean;
  onAddRow?: () => void;
  onAddColumn?: () => void;
  onDeleteColumn?: () => void;
}

export const TableElement = memo(function TableElement({
  element,
  interactive,
  selected,
  onAddRow,
  onAddColumn,
  onDeleteColumn,
}: TableElementProps) {
  const { table } = element;
  const headerRow = table.rows[0];
  const dataRows = table.rows.slice(1);
  const isIndexed = headerRow?.cells[0]?.value.trim() === "#";

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-[16px] border border-[#D7E6F8] bg-white p-3",
        selected && interactive && "border-primary/30",
      )}
    >
      <div className="mb-2 flex items-center justify-between rounded-[12px] bg-[#EEF4FF] px-3 py-2">
        <div className="flex items-center gap-2 text-primary">
          <List className="h-4 w-4" />
          <p className="text-[12px] font-bold tracking-[0.04em]">
            QUOTATION ITEMS
          </p>
        </div>
        {interactive ? (
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              suppressHydrationWarning
              className="inline-flex h-7 items-center gap-1 rounded-full bg-white px-2.5 text-[11px] font-semibold text-primary shadow-sm hover:bg-primary/5"
              onClick={(event) => {
                event.stopPropagation();
                onAddColumn?.();
              }}
            >
              <Plus className="h-3.5 w-3.5" />
              Add Column
            </button>
            <button
              type="button"
              aria-label="Delete column"
              suppressHydrationWarning
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-muted shadow-sm hover:bg-danger/10 hover:text-danger"
              onClick={(event) => {
                event.stopPropagation();
                onDeleteColumn?.();
              }}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="min-h-0 flex-1 overflow-auto">
        <table className="w-full table-fixed border-separate text-left" style={{ borderSpacing: `0 ${table.rowSpacing}px` }}>
          <colgroup>
            {interactive ? <col className="w-6" /> : null}
            {Array.from({ length: table.columns }, (_, index) => (
              <col
                key={index}
                style={{ width: columnWidth(index, table.columns, isIndexed) }}
              />
            ))}
          </colgroup>
          {headerRow ? (
            <thead>
              <tr>
                {interactive ? <th className="w-6 p-0" /> : null}
                {headerRow.cells.map((cell, index) => (
                  <th
                    key={cell.id}
                    className={cn(
                      "pb-1 text-[11px] font-semibold text-muted",
                      isIndexed && index === 0 && "text-center",
                      isIndexed && index > 1 && "text-right",
                    )}
                    style={{ padding: `0 ${Math.max(4, table.cellPadding / 2)}px` }}
                  >
                    {cell.value}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {(headerRow ? dataRows : table.rows).map((row) => (
              <tr key={row.id}>
                {interactive ? (
                  <td className="w-6 pr-1 align-middle text-[#94A3B8]">
                    <GripVertical className="h-3.5 w-3.5" />
                  </td>
                ) : null}
                {row.cells.map((cell, index) => {
                  const isItemDetail = isIndexed && index === 1;
                  const isIndexCell = isIndexed && index === 0;
                  const isNumeric = isIndexed && index > 1;

                  return (
                    <td
                      key={cell.id}
                      className="align-middle"
                      style={{
                        padding: isItemDetail
                          ? "0 4px"
                          : `2px ${Math.max(4, table.cellPadding / 2)}px`,
                      }}
                    >
                      <div
                        className={cn(
                          "flex min-h-[34px] items-center text-[12px] text-foreground",
                          isItemDetail &&
                            Boolean(cell.value) &&
                            "w-fit rounded-full bg-[#F1F6FF] px-3 font-medium text-slate-700",
                          isIndexCell && "justify-center font-semibold text-muted",
                          isNumeric && "justify-end text-[12px] text-slate-600",
                        )}
                      >
                        {cell.value}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {interactive ? (
        <button
          type="button"
          suppressHydrationWarning
          className="mt-2 inline-flex h-8 items-center justify-center gap-1 self-start rounded-full px-2 text-[12px] font-semibold text-primary hover:bg-primary/5"
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

function columnWidth(
  index: number,
  columns: number,
  isIndexed: boolean,
): string {
  if (isIndexed && index === 0) {
    return "36px";
  }

  if (isIndexed && index > 1) {
    return `${Math.max(64, Math.floor(280 / Math.max(columns - 2, 1)))}px`;
  }

  return "auto";
}
