"use client";

import type { ChangeEvent, ReactNode } from "react";
import { useState } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Columns3,
  Plus,
  Rows3,
  SlidersHorizontal,
  Trash2,
  Type,
} from "lucide-react";
import {
  FONT_FAMILIES,
  SHAPE_KINDS,
  TEXT_ALIGNS,
  type DocumentElement,
  type ShapeKind,
} from "@/types/element";
import { SavedTemplates } from "@/components/editor/SavedTemplates";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useEditorSelection } from "@/hooks/useEditorSelection";
import {
  addTableColumn,
  addTableRow,
  deleteTableColumn,
  deleteTableRow,
} from "@/lib/document-utils";
import {
  COMPANY_LOGO_ID,
  fileToDataUrl,
  isCompanyLogo,
  replaceCompanyLogoFile,
} from "@/lib/company-logo";
import { cn } from "@/lib/cn";
import { useEditorStore } from "@/store/editor.store";

export function PropertiesPanel() {
  const element = useEditorSelection();
  const updateElement = useEditorStore((state) => state.updateElement);

  return (
    <aside className="flex w-[320px] shrink-0 flex-col overflow-hidden border-l border-border bg-surface">
      <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-3">
        <SlidersHorizontal className="h-4 w-4 text-primary" />
        <h2 className="text-[13px] font-semibold text-foreground">
          Properties & Data
        </h2>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
        {!element ? (
          <p className="rounded-[10px] border border-dashed border-border bg-surface-muted px-4 py-6 text-center text-[13px] leading-6 text-muted">
            Select an element
            <br />
            to edit its properties.
          </p>
        ) : null}

        {element?.type === "text" ? (
          <section className="rounded-[12px] border border-border p-3">
            <SectionTitle icon={<Type className="h-3.5 w-3.5" />} title="Text Settings" />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Select
                label="Font Family"
                value={element.text.fontFamily}
                onChange={(event) =>
                  updateElement(element.id, (current) =>
                    current.type === "text"
                      ? {
                          ...current,
                          text: {
                            ...current.text,
                            fontFamily: event.target.value,
                          },
                        }
                      : current,
                  )
                }
              >
                {FONT_FAMILIES.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </Select>
              <Input
                label="Font Size"
                type="number"
                min={8}
                max={96}
                value={element.text.fontSize}
                onChange={(event) =>
                  updateElement(element.id, (current) =>
                    current.type === "text"
                      ? {
                          ...current,
                          text: {
                            ...current.text,
                            fontSize: Number(event.target.value) || 12,
                          },
                        }
                      : current,
                  )
                }
              />
              <Select
                label="Font Weight"
                value={String(element.text.fontWeight)}
                onChange={(event) =>
                  updateElement(element.id, (current) =>
                    current.type === "text"
                      ? {
                          ...current,
                          text: {
                            ...current.text,
                            fontWeight: Number(event.target.value),
                          },
                        }
                      : current,
                  )
                }
              >
                <option value="400">Regular</option>
                <option value="500">Medium</option>
                <option value="600">Semibold</option>
                <option value="700">Bold</option>
              </Select>
              <label className="flex flex-col gap-1.5">
                <span className="text-[12px] font-medium text-muted">
                  Text Color
                </span>
                <span className="flex h-9 items-center gap-2 rounded-[8px] border border-border px-2">
                  <input
                    type="color"
                    value={toColorInput(element.text.color)}
                    onChange={(event) =>
                      updateElement(element.id, (current) =>
                        current.type === "text"
                          ? {
                              ...current,
                              text: {
                                ...current.text,
                                color: event.target.value,
                              },
                            }
                          : current,
                      )
                    }
                    className="h-5 w-5 cursor-pointer rounded border-0 bg-transparent p-0"
                  />
                  <span className="text-[12px] text-foreground">
                    {element.text.color}
                  </span>
                </span>
              </label>
            </div>
            <div className="mt-3">
              <p className="mb-1.5 text-[12px] font-medium text-muted">
                Alignment
              </p>
              <div className="flex overflow-hidden rounded-[8px] border border-border">
                {TEXT_ALIGNS.map((align) => (
                  <button
                    key={align}
                    type="button"
                    aria-label={`Align ${align}`}
                    onClick={() =>
                      updateElement(element.id, (current) =>
                        current.type === "text"
                          ? { ...current, text: { ...current.text, align } }
                          : current,
                      )
                    }
                    className={cn(
                      "flex h-8 flex-1 items-center justify-center text-muted hover:bg-surface-muted",
                      element.text.align === align &&
                        "bg-primary/10 text-primary",
                    )}
                  >
                    {align === "left" ? (
                      <AlignLeft className="h-4 w-4" />
                    ) : null}
                    {align === "center" ? (
                      <AlignCenter className="h-4 w-4" />
                    ) : null}
                    {align === "right" ? (
                      <AlignRight className="h-4 w-4" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
            <label className="mt-3 flex flex-col gap-1.5">
              <span className="text-[12px] font-medium text-muted">Content</span>
              <textarea
                value={element.text.content}
                onChange={(event) =>
                  updateElement(element.id, (current) =>
                    current.type === "text"
                      ? {
                          ...current,
                          text: { ...current.text, content: event.target.value },
                        }
                      : current,
                  )
                }
                className="min-h-[72px] rounded-[8px] border border-border bg-surface px-3 py-2 text-[13px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </section>
        ) : null}

        {element?.type === "table" ? (
          <>
            <section className="rounded-[12px] border border-border p-3">
              <SectionTitle title="Table Settings" />
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Input
                  label="Width"
                  type="number"
                  value={element.width}
                  onChange={(event) =>
                    updateElement(element.id, (current) => ({
                      ...current,
                      width: Number(event.target.value) || current.width,
                    }))
                  }
                />
                <Input
                  label="Borders"
                  value={`${element.table.borderWidth}px`}
                  onChange={(event) => {
                    const value = Number.parseInt(event.target.value, 10);
                    updateElement(element.id, (current) =>
                      current.type === "table"
                        ? {
                            ...current,
                            table: {
                              ...current.table,
                              borderWidth: Number.isNaN(value) ? 0 : value,
                            },
                          }
                        : current,
                    );
                  }}
                />
                <Input
                  label="Padding"
                  type="number"
                  min={0}
                  value={element.table.cellPadding}
                  onChange={(event) =>
                    updateElement(element.id, (current) =>
                      current.type === "table"
                        ? {
                            ...current,
                            table: {
                              ...current.table,
                              cellPadding: Number(event.target.value) || 0,
                            },
                          }
                        : current,
                    )
                  }
                />
                <Input
                  label="Row Spacing"
                  type="number"
                  min={0}
                  value={element.table.rowSpacing}
                  onChange={(event) =>
                    updateElement(element.id, (current) =>
                      current.type === "table"
                        ? {
                            ...current,
                            table: {
                              ...current.table,
                              rowSpacing: Number(event.target.value) || 0,
                            },
                          }
                        : current,
                    )
                  }
                />
              </div>
            </section>

            <section className="rounded-[12px] border border-border p-3">
              <SectionTitle icon={<Columns3 className="h-3.5 w-3.5" />} title="Column Management" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <PanelAction
                  icon={<Plus className="h-3.5 w-3.5" />}
                  label="Add Column"
                  onClick={() =>
                    updateElement(element.id, (current) =>
                      current.type === "table" ? addTableColumn(current) : current,
                    )
                  }
                />
                <PanelAction
                  icon={<Trash2 className="h-3.5 w-3.5" />}
                  label="Delete Column"
                  danger
                  onClick={() =>
                    updateElement(element.id, (current) =>
                      current.type === "table"
                        ? deleteTableColumn(current)
                        : current,
                    )
                  }
                />
              </div>
            </section>

            <section className="rounded-[12px] border border-border p-3">
              <SectionTitle icon={<Rows3 className="h-3.5 w-3.5" />} title="Row Management" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <PanelAction
                  icon={<Plus className="h-3.5 w-3.5" />}
                  label="Add Row"
                  onClick={() =>
                    updateElement(element.id, (current) =>
                      current.type === "table" ? addTableRow(current) : current,
                    )
                  }
                />
                <PanelAction
                  icon={<Trash2 className="h-3.5 w-3.5" />}
                  label="Delete Row"
                  danger
                  onClick={() =>
                    updateElement(element.id, (current) =>
                      current.type === "table" ? deleteTableRow(current) : current,
                    )
                  }
                />
              </div>
            </section>
          </>
        ) : null}

        {element && (element.type === "image" || isCompanyLogo(element.id)) ? (
          <ImageSettings element={element} />
        ) : null}

        {element?.type === "shape" && !isCompanyLogo(element.id) ? (
          <section className="rounded-[12px] border border-border p-3">
            <SectionTitle title="Shape Settings" />
            <div className="mt-3 flex flex-col gap-3">
              <Select
                label="Shape"
                value={element.shape.kind}
                onChange={(event) => {
                  const kind = toShapeKind(event.target.value);
                  if (!kind) {
                    return;
                  }

                  updateElement(element.id, (current) =>
                    current.type === "shape"
                      ? {
                          ...current,
                          shape: { ...current.shape, kind },
                        }
                      : current,
                  );
                }}
              >
                <option value="rectangle">Rectangle</option>
                <option value="circle">Circle</option>
                <option value="line">Line</option>
              </Select>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Fill"
                  type="color"
                  value={toColorInput(element.shape.fill)}
                  onChange={(event) =>
                    updateElement(element.id, (current) =>
                      current.type === "shape"
                        ? {
                            ...current,
                            shape: { ...current.shape, fill: event.target.value },
                          }
                        : current,
                    )
                  }
                />
                <Input
                  label="Border"
                  type="color"
                  value={toColorInput(element.shape.borderColor)}
                  onChange={(event) =>
                    updateElement(element.id, (current) =>
                      current.type === "shape"
                        ? {
                            ...current,
                            shape: {
                              ...current.shape,
                              borderColor: event.target.value,
                            },
                          }
                        : current,
                    )
                  }
                />
                <Input
                  label="Width"
                  type="number"
                  value={element.width}
                  onChange={(event) =>
                    updateElement(element.id, (current) => ({
                      ...current,
                      width: Number(event.target.value) || current.width,
                    }))
                  }
                />
                <Input
                  label="Height"
                  type="number"
                  value={element.height}
                  onChange={(event) =>
                    updateElement(element.id, (current) => ({
                      ...current,
                      height: Number(event.target.value) || current.height,
                    }))
                  }
                />
              </div>
            </div>
          </section>
        ) : null}
      </div>
      <SavedTemplates />
    </aside>
  );
}

function ImageSettings({ element }: { element: DocumentElement }) {
  const updateElement = useEditorStore((state) => state.updateElement);
  const [isReplacing, setIsReplacing] = useState(false);
  const [replaceError, setReplaceError] = useState<string | null>(null);
  const logo = isCompanyLogo(element.id);
  const imageSrc = element.type === "image" ? element.image.src : "";
  const imageAlt =
    element.type === "image" ? (element.image.alt ?? "") : "Company logo";

  const applySrc = (src: string) => {
    updateElement(element.id, (current) => {
      if (current.type === "image") {
        return {
          ...current,
          id: logo ? COMPANY_LOGO_ID : current.id,
          image: { ...current.image, src },
        };
      }

      return {
        id: logo ? COMPANY_LOGO_ID : current.id,
        type: "image",
        x: current.x,
        y: current.y,
        width: current.width,
        height: current.height,
        zIndex: current.zIndex,
        locked: current.locked,
        visible: current.visible,
        image: {
          src,
          alt: "Company logo",
          objectFit: "cover",
        },
      };
    });
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    setReplaceError(null);
    setIsReplacing(true);

    try {
      applySrc(await fileToDataUrl(file));

      if (logo) {
        await replaceCompanyLogoFile(file);
      }
    } catch (error) {
      setReplaceError(
        error instanceof Error ? error.message : "Could not replace the image.",
      );
    } finally {
      setIsReplacing(false);
    }
  };

  return (
    <section className="rounded-[12px] border border-border p-3">
      <SectionTitle title={logo ? "Company Logo" : "Image Settings"} />
      <div className="mt-3 flex flex-col gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-[12px] font-medium text-muted">
            {logo ? "Replace logo" : "Replace image"}
          </span>
          <input
            type="file"
            accept="image/*"
            disabled={isReplacing}
            onClick={(event) => event.stopPropagation()}
            onChange={(event) => void handleFileChange(event)}
            className="block w-full text-[12px] text-muted file:mr-3 file:h-8 file:rounded-[8px] file:border file:border-primary/20 file:bg-primary/5 file:px-3 file:text-[12px] file:font-medium file:text-primary"
          />
          <span className="text-[11px] leading-4 text-muted">
            {logo
              ? "Default is public/images/icon.png. Choosing a new file replaces that image."
              : "Upload a file to replace this image."}
          </span>
        </label>
        {isReplacing ? (
          <p className="text-[12px] text-muted">Replacing image…</p>
        ) : null}
        {replaceError ? (
          <p className="text-[12px] text-danger">{replaceError}</p>
        ) : null}
        <Input
          label="Image URL"
          value={imageSrc.startsWith("data:") ? "Uploaded image" : imageSrc}
          readOnly={imageSrc.startsWith("data:")}
          onChange={(event) => {
            if (!imageSrc.startsWith("data:")) {
              applySrc(event.target.value);
            }
          }}
        />
        <Input
          label="Alt text"
          value={imageAlt}
          onChange={(event) =>
            updateElement(element.id, (current) =>
              current.type === "image"
                ? {
                    ...current,
                    image: { ...current.image, alt: event.target.value },
                  }
                : current,
            )
          }
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Width"
            type="number"
            value={element.width}
            onChange={(event) =>
              updateElement(element.id, (current) => ({
                ...current,
                width: Number(event.target.value) || current.width,
              }))
            }
          />
          <Input
            label="Height"
            type="number"
            value={element.height}
            onChange={(event) =>
              updateElement(element.id, (current) => ({
                ...current,
                height: Number(event.target.value) || current.height,
              }))
            }
          />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
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

function PanelAction({
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

function toColorInput(value: string): string {
  return /^#([0-9a-fA-F]{6})$/.test(value) ? value : "#2563EB";
}

function toShapeKind(value: string): ShapeKind | null {
  for (const kind of SHAPE_KINDS) {
    if (kind === value) {
      return kind;
    }
  }

  return null;
}
