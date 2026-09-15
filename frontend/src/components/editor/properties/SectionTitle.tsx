import type { ReactNode } from "react";

export function SectionTitle({
  icon,
  title,
}: {
  icon?: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
      {icon ? <span className="text-primary">{icon}</span> : null}
      {title}
    </div>
  );
}
