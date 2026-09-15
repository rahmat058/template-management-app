export const templateKeys = {
  all: ["templates"] as const,
  detail: (id: string) => ["templates", id] as const,
};
