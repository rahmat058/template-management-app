export interface DuplicateNameGroup {
  _id: string
  count: number
}

// Kept free of any Mongoose or connection import so the guard can be unit-tested without a database.
export function formatDuplicateNames(duplicates: DuplicateNameGroup[]): string {
  return duplicates
    .map((duplicate) => `${duplicate._id} (x${duplicate.count})`)
    .sort()
    .join(', ')
}

export function assertNoDuplicateNames(duplicates: DuplicateNameGroup[]): void {
  if (duplicates.length === 0) {
    return
  }

  throw new Error(
    `Cannot build a unique index on "name": ${duplicates.length} duplicated name(s) found — ` +
      `${formatDuplicateNames(duplicates)}. Rename or merge them, then re-run.`,
  )
}
