"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TooltipProps {
  label: string;
  shortcut?: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ label, shortcut, children, className }: TooltipProps) {
  return (
    <span className={cn("relative inline-flex group", className)}>
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-[6px] bg-foreground px-2 py-1 text-[11px] text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        {label}
        {shortcut ? (
          <span className="ml-1.5 text-white/70">{shortcut}</span>
        ) : null}
      </span>
    </span>
  );
}
