import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { templateKeys } from "@/lib/query-keys";

export function useTemplates() {
  return useQuery({
    queryKey: templateKeys.all,
    queryFn: api.listTemplates,
  });
}
