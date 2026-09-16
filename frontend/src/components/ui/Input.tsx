'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, label, id, ...props }, ref) {
  return (
    <label className="flex flex-col gap-1.5">
      {label ? <span className="text-muted text-[12px] font-medium">{label}</span> : null}
      <input
        ref={ref}
        id={id}
        className={cn(
          'border-border bg-surface text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 h-9 w-full rounded-[8px] border px-3 text-[13px] transition-colors outline-none focus:ring-2',
          className,
        )}
        {...props}
      />
    </label>
  )
})
