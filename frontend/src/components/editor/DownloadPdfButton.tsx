'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Tooltip } from '@/components/ui/Tooltip'
import { useExportPdf } from '@/hooks/useExportPdf'

export function DownloadPdfButton() {
  const { exportPdf, isExporting, error } = useExportPdf()

  return (
    <div className="flex items-center gap-2">
      <Tooltip label={error ?? 'Download PDF'}>
        <Button variant="outline" aria-label="Download PDF" isLoading={isExporting} onClick={() => void exportPdf()}>
          <Download className="h-4 w-4" />
          {isExporting ? 'Exporting...' : 'Download PDF'}
        </Button>
      </Tooltip>
      {error ? <span className="text-danger max-w-40 text-[11px] leading-tight">{error}</span> : null}
    </div>
  )
}
