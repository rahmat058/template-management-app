'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { TriangleAlert } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ErrorProps {
  error: Error & { digest?: string }
  retry: () => void
}

export default function Error({ error, retry }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="bg-danger/10 text-danger flex h-12 w-12 items-center justify-center rounded-xl">
        <TriangleAlert className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-foreground text-[18px] font-semibold">Something went wrong</h1>
        <p className="text-muted mx-auto mt-2 max-w-sm text-[13px] leading-relaxed">
          An unexpected error interrupted the editor. Try again, or reload the app if it keeps happening.
        </p>
        {error.digest ? <p className="text-muted-foreground mt-2 text-[11px]">Reference: {error.digest}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="primary" onClick={() => retry()}>
          Try again
        </Button>
        <Link
          href="/"
          className="border-border bg-surface text-foreground hover:bg-surface-muted focus-visible:ring-primary/40 inline-flex h-9 items-center justify-center rounded-lg border px-3.5 text-[13px] font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none">
          Back to editor
        </Link>
      </div>
    </main>
  )
}
