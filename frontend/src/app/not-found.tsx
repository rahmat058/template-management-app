import Link from 'next/link'
import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
        <SearchX className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-foreground text-[18px] font-semibold">Page not found</h1>
        <p className="text-muted mx-auto mt-2 max-w-sm text-[13px] leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="bg-primary hover:bg-primary-hover focus-visible:ring-primary/40 inline-flex h-9 items-center justify-center rounded-lg px-3.5 text-[13px] font-medium text-white transition-colors focus-visible:ring-2 focus-visible:outline-none">
        Back to editor
      </Link>
    </main>
  )
}
