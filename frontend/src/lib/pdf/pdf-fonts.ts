export function pdfFontFamily(fontFamily: string, fontWeight: number): string {
  const serif = fontFamily === 'Georgia' || fontFamily === 'Times New Roman'
  const bold = fontWeight >= 600

  if (serif) {
    return bold ? 'Times-Bold' : 'Times-Roman'
  }

  return bold ? 'Helvetica-Bold' : 'Helvetica'
}
