import { createElement, type ReactElement } from "react";
import type { DocumentProps } from "@react-pdf/renderer";
import type { EditorDocument } from "@/store/editor.store";

function safeFileName(name: string): string {
  const trimmed = name.trim().replace(/[<>:"/\\|?*]+/g, "-");
  return trimmed || "template";
}

export async function downloadDocumentPdf(
  editorDocument: EditorDocument,
  name: string,
): Promise<void> {
  const [{ pdf }, { TemplatePdfDocument }, { collectPdfImages }] =
    await Promise.all([
      import("@react-pdf/renderer"),
      import("@/components/pdf/TemplatePdfDocument"),
      import("@/lib/pdf/resolve-images"),
    ]);

  const images = await collectPdfImages(editorDocument);
  const blob = await pdf(
    createElement(TemplatePdfDocument, {
      document: editorDocument,
      images,
    }) as ReactElement<DocumentProps>,
  ).toBlob();

  const objectUrl = URL.createObjectURL(blob);
  const link = window.document.createElement("a");
  link.href = objectUrl;
  link.download = `${safeFileName(name)}.pdf`;
  window.document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}
