export function toColorInput(value: string): string {
  return /^#([0-9a-fA-F]{6})$/.test(value) ? value : '#2563EB'
}
