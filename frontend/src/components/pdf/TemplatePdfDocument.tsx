'use client'

import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import { isIndexedTable } from '@/components/elements/table/table-layout'
import { isCompanyLogo } from '@/lib/company-logo'
import { hasTableHeader } from '@/lib/document-utils'
import { pdfFontFamily } from '@/lib/pdf/pdf-fonts'
import type { EditorDocument } from '@/store/editor.store'
import type { DocumentElement, TableElement } from '@/types/element'

interface TemplatePdfDocumentProps {
  document: EditorDocument
  images: Record<string, string>
}

export function TemplatePdfDocument({ document, images }: TemplatePdfDocumentProps) {
  const pages = [...document.pages].sort((left, right) => left.order - right.order)

  return (
    <Document>
      {pages.map((page) => (
        <Page
          key={page.id}
          size={{ width: page.width, height: page.height }}
          style={{ backgroundColor: page.background || '#ffffff' }}>
          <View style={{ width: page.width, height: page.height }}>
            {[...page.elements]
              .filter((element) => element.visible !== false)
              .sort((left, right) => left.zIndex - right.zIndex)
              .map((element) => (
                <PdfElement key={element.id} element={element} images={images} />
              ))}
          </View>
        </Page>
      ))}
    </Document>
  )
}

function PdfElement({ element, images }: { element: DocumentElement; images: Record<string, string> }) {
  const box = {
    position: 'absolute' as const,
    left: element.x,
    top: element.y,
    width: element.width,
    height: element.height,
  }

  if (element.type === 'text') {
    return (
      <View
        wrap={false}
        style={{
          position: 'absolute',
          left: element.x,
          top: element.y,
          width: element.width,
        }}>
        <Text
          style={{
            fontFamily: pdfFontFamily(element.text.fontFamily, element.text.fontWeight),
            fontSize: element.text.fontSize,
            color: element.text.color,
            textAlign: element.text.align,
            lineHeight: 1,
          }}>
          {element.text.content}
        </Text>
      </View>
    )
  }

  if (element.type === 'image') {
    const src = images[element.image.src]
    if (!src) {
      return <View style={box} />
    }

    return (
      <View style={box}>
        <Image
          src={src}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: isCompanyLogo(element.id) ? 8 : 0,
          }}
        />
      </View>
    )
  }

  if (element.type === 'shape') {
    if (element.shape.kind === 'line') {
      return (
        <View style={{ ...box, justifyContent: 'center' }}>
          <View
            style={{
              width: '100%',
              height: Math.max(1, element.shape.borderWidth || 2),
              backgroundColor: element.shape.borderColor || element.shape.fill,
              borderRadius: element.shape.borderRadius,
            }}
          />
        </View>
      )
    }

    return (
      <View
        style={{
          ...box,
          backgroundColor: element.shape.fill,
          borderWidth: element.shape.borderWidth,
          borderColor: element.shape.borderColor,
          borderStyle: 'solid',
          borderRadius: element.shape.kind === 'circle' ? 999 : element.shape.borderRadius,
        }}
      />
    )
  }

  return (
    <View style={box}>
      <PdfTable element={element} />
    </View>
  )
}

function PdfTable({ element }: { element: TableElement }) {
  const { table } = element
  const headerRow = table.rows[0]
  const hasHeader = hasTableHeader(element)
  const dataRows = hasHeader ? table.rows.slice(1) : table.rows
  const isIndexed = isIndexedTable(headerRow?.cells[0]?.value)
  const cellPad = Math.max(4, table.cellPadding / 2)

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        borderWidth: table.borderWidth > 0 ? table.borderWidth : 1,
        borderColor: table.borderWidth > 0 ? table.borderColor : '#D7E6F8',
        borderStyle: 'solid',
        borderRadius: 16,
        padding: 12,
        backgroundColor: '#ffffff',
      }}>
      <View
        style={{
          backgroundColor: '#EEF4FF',
          borderRadius: 12,
          paddingHorizontal: 12,
          paddingVertical: 8,
          marginBottom: 8,
        }}>
        <Text
          style={{
            fontFamily: 'Helvetica-Bold',
            fontSize: 11,
            color: '#2563EB',
            letterSpacing: 0.6,
          }}>
          QUOTATION ITEMS
        </Text>
      </View>

      {hasHeader && headerRow ? (
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          {headerRow.cells.map((cell, index) => (
            <Text
              key={cell.id}
              style={{
                flex: columnFlex(index, isIndexed),
                fontFamily: 'Helvetica-Bold',
                fontSize: 10,
                color: '#64748B',
                textAlign: cellAlign(index, isIndexed),
                paddingHorizontal: cellPad,
              }}>
              {cell.value}
            </Text>
          ))}
        </View>
      ) : null}

      {dataRows.map((row) => (
        <View
          key={row.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: table.rowSpacing,
            minHeight: 28,
          }}>
          {row.cells.map((cell, index) => {
            const itemDetail = isIndexed && index === 1 && Boolean(cell.value)

            return (
              <View
                key={cell.id}
                style={{
                  flex: columnFlex(index, isIndexed),
                  paddingHorizontal: cellPad,
                  backgroundColor: itemDetail ? '#F1F6FF' : 'transparent',
                  borderRadius: itemDetail ? 999 : 0,
                  justifyContent: 'center',
                  minHeight: 24,
                }}>
                <Text
                  style={{
                    fontFamily: isIndexed && index === 0 ? 'Helvetica-Bold' : 'Helvetica',
                    fontSize: 11,
                    color: isIndexed && index === 0 ? '#64748B' : '#334155',
                    textAlign: cellAlign(index, isIndexed),
                  }}>
                  {cell.value}
                </Text>
              </View>
            )
          })}
        </View>
      ))}
    </View>
  )
}

function columnFlex(index: number, isIndexed: boolean): number {
  if (isIndexed && index === 0) {
    return 0.45
  }

  if (isIndexed && index === 1) {
    return 2.2
  }

  return 1
}

function cellAlign(index: number, isIndexed: boolean): 'left' | 'center' | 'right' {
  if (isIndexed && index === 0) {
    return 'center'
  }

  if (isIndexed && index > 1) {
    return 'right'
  }

  return 'left'
}
