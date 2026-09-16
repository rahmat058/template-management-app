import { useState } from 'react'
import { downloadDocumentPdf } from '@/lib/pdf/export-document-pdf'
import { useEditorStore } from '@/store/editor.store'

export function useExportPdf() {
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const exportPdf = async () => {
    const tab = useEditorStore.getState().getActiveTab()
    if (!tab) {
      setError('No active document to export.')
      return
    }

    setIsExporting(true)
    setError(null)

    try {
      await downloadDocumentPdf(tab.document, tab.name)
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : 'PDF export failed.'
      setError(message)
    } finally {
      setIsExporting(false)
    }
  }

  return { exportPdf, isExporting, error }
}
