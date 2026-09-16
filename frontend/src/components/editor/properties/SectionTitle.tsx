import type { ReactNode } from 'react'

export function SectionTitle({ icon, title }: { icon?: ReactNode; title: string }) {
  return (
    <div className="text-foreground flex items-center gap-2 text-[13px] font-semibold">
      {icon ? <span className="text-primary">{icon}</span> : null}
      {title}
    </div>
  )
}
