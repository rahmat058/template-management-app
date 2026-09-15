"use client";

import { cn } from "@/lib/cn";

interface TableCellEditorProps {
  value: string;
  interactive: boolean;
  isItemDetail?: boolean;
  isIndexCell?: boolean;
  isNumeric?: boolean;
  onFocus?: () => void;
  onChange: (value: string) => void;
}

export function TableCellEditor({
  value,
  interactive,
  isItemDetail = false,
  isIndexCell = false,
  isNumeric = false,
  onFocus,
  onChange,
}: TableCellEditorProps) {
  if (!interactive) {
    return (
      <div
        className={cn(
          "flex min-h-[34px] items-center text-[12px] text-foreground",
          isItemDetail &&
            Boolean(value) &&
            "w-fit rounded-full bg-[#F1F6FF] px-3 font-medium text-slate-700",
          isIndexCell && "justify-center font-semibold text-muted",
          isNumeric && "justify-end text-slate-600",
        )}
      >
        {value}
      </div>
    );
  }

  return (
    <input
      data-no-dnd="true"
      value={value}
      aria-label="Table cell"
      onFocus={onFocus}
      onClick={(event) => event.stopPropagation()}
      onChange={(event) => onChange(event.target.value)}
      className={cn(
        "min-h-[34px] w-full bg-transparent text-[12px] text-foreground outline-none",
        isItemDetail &&
          "rounded-full bg-[#F1F6FF] px-3 font-medium text-slate-700",
        isIndexCell && "text-center font-semibold text-muted",
        isNumeric && "text-right text-slate-600",
      )}
    />
  );
}
