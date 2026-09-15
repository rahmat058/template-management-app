import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function PanelAction({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-9 items-center justify-center gap-1.5 rounded-[8px] border text-[12px] font-medium",
        danger
          ? "border-border text-muted hover:border-danger hover:text-danger"
          : "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10",
      )}
    >
      {icon}
      {label}
    </button>
  );
}
