import { useLayoutEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { api, ApiClientError } from "@/lib/api";
import { templateKeys } from "@/lib/query-keys";
import { AUTOLOAD_TEMPLATE_NAME } from "@/lib/templates";
import { useEditorStore } from "@/store/editor.store";

export function useHydrateTemplate1(): {
  isReady: boolean;
  error: string | null;
  retry: () => void;
} {
  const hydrateFromTemplate = useEditorStore(
    (state) => state.hydrateFromTemplate,
  );
  const didHydrate = useRef(false);

  const query = useQuery({
    queryKey: templateKeys.byName(AUTOLOAD_TEMPLATE_NAME),
    queryFn: () => api.getTemplateByName(AUTOLOAD_TEMPLATE_NAME),
    retry: false,
  });

  useLayoutEffect(() => {
    if (!query.isFetched || didHydrate.current || !query.data) {
      return;
    }

    didHydrate.current = true;
    hydrateFromTemplate(query.data);
  }, [hydrateFromTemplate, query.data, query.isFetched]);

  const error = query.isError
    ? query.error instanceof ApiClientError
      ? query.error.message
      : "Could not load the saved template."
    : null;

  return {
    isReady: query.isFetched,
    error,
    retry: () => {
      void query.refetch();
    },
  };
}
