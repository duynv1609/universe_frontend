import { useQuery } from '@tanstack/vue-query';
import { type MaybeRef, get } from '@vueuse/core';
import { LanguageManager } from '~/utils/lang';

import { QUERIES } from '~/constants';
import type { AppResponse, SectionsModel, QueryOptions } from '~/models';

type Response = AppResponse<SectionsModel[]>;
type Options = {
  query?: MaybeRef<string>;
} & QueryOptions<Response, unknown, Response, (string | MaybeRef<string> | undefined)[]>;
function endpoint(query?: string) {
  return `genre-type?${query || ''}`;
}
export function useGetListSection(options?: Options) {
  const { API, handleCallApi } = useCallApi();

  const { localeSetting } = LanguageManager();

  function handler(query?: string) {
    return handleCallApi(() =>
      API<SectionsModel[]>(endpoint(query), { headers: { lang: localeSetting.value } })
    );
  }

  return useQuery({
    cacheTime: 0,
    keepPreviousData: true,
    queryFn: () => handler(get(options?.query)),
    queryKey: [QUERIES.SECTIONS_LIST, options?.query, localeSetting],
    refetchOnWindowFocus: false,
    ...options,
    onSuccess: (data?: Response) => data?.isOk && get(options?.onSuccess)?.(data),
  });
}
