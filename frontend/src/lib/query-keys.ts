export const templateKeys = {
  all: ["templates"] as const,
  byName: (name: string) => ["templates", "by-name", name] as const,
  detail: (id: string) => ["templates", id] as const,
};
