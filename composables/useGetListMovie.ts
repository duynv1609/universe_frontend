import { useQuery } from '@tanstack/vue-query';
import { type MaybeRef, get } from '@vueuse/core';
import { LanguageManager } from '~/utils/lang';

import { QUERIES } from '~/constants';
import type { AppResponse, MoviesModel, QueryOptions } from '~/models';

type Response = AppResponse<MoviesModel[]>;
type Options = {
  query?: MaybeRef<string>;
} & QueryOptions<Response, unknown, Response, (string | MaybeRef<string> | undefined)[]>;
function endpoint(query?: string) {
  return `movies?${query || ''}`;
}
export function useGetListMovie(options?: Options) {
  const { API, handleCallApi } = useCallApi();

  const { localeSetting } = LanguageManager();

  function handler(query?: string) {
    return handleCallApi(() =>
      API<MoviesModel[]>(endpoint(query), { headers: { lang: localeSetting.value } })
    );
  }

  return useQuery({
    cacheTime: 0,
    keepPreviousData: true,
    queryFn: () => handler(get(options?.query)),
    queryKey: [QUERIES.MOVIES_LIST, options?.query, localeSetting],
    refetchOnWindowFocus: false,
    ...options,
    onSuccess: (data?: Response) => data?.isOk && get(options?.onSuccess)?.(data),
  });
}
