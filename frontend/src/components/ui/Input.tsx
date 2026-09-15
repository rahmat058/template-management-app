"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, label, id, ...props }, ref) {
    return (
      <label className="flex flex-col gap-1.5">
        {label ? (
          <span className="text-[12px] font-medium text-muted">{label}</span>
        ) : null}
        <input
          ref={ref}
          id={id}
          className={cn(
            "h-9 w-full rounded-[8px] border border-border bg-surface px-3 text-[13px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20",
            className,
          )}
          {...props}
        />
      </label>
    );
  },
);
