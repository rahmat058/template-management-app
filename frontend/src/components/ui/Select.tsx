"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ className, label, children, ...props }, ref) {
    return (
      <label className="flex flex-col gap-1.5">
        {label ? (
          <span className="text-[12px] font-medium text-muted">{label}</span>
        ) : null}
        <select
          ref={ref}
          className={cn(
            "h-9 w-full rounded-[8px] border border-border bg-surface px-3 text-[13px] text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
            className,
          )}
          {...props}
        >
          {children}
        </select>
      </label>
    );
  },
);
