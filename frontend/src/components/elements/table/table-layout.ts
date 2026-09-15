export function columnWidth(
  index: number,
  columns: number,
  isIndexed: boolean,
): string {
  if (isIndexed && index === 0) {
    return "36px";
  }

  if (isIndexed && index > 1) {
    return `${Math.max(64, Math.floor(280 / Math.max(columns - 2, 1)))}px`;
  }

  return "auto";
}

export function isIndexedTable(firstHeaderValue: string | undefined): boolean {
  return firstHeaderValue?.trim() === "#";
}
