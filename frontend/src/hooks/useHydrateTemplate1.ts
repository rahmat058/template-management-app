import { useLayoutEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { templateKeys } from "@/lib/query-keys";
import { AUTOLOAD_TEMPLATE_NAME } from "@/lib/templates";
import { useEditorStore } from "@/store/editor.store";

export function useHydrateTemplate1(): { isReady: boolean } {
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
    if (!query.isFetched || didHydrate.current) {
      return;
    }

    didHydrate.current = true;

    if (query.data) {
      hydrateFromTemplate(query.data);
    }
  }, [hydrateFromTemplate, query.data, query.isFetched]);

  return { isReady: query.isFetched };
}
