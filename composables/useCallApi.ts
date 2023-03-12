import type { FetchError } from 'ofetch';

import type { AppResponse, NetworkResponse } from '~/models';

type APIOptions<T> = Parameters<typeof $fetch<NetworkResponse<T>>>[1] | undefined;
type Options = {
  canShowErrorMessage?: boolean;
  canShowSuccessMessage?: boolean;
  errorMessage?: string;
  successMessage?: string;
};

export function useCallApi() {
  const config = useRuntimeConfig();

  // NOTE: to prevent error server reloading
  // const $session = typeof useSession === 'function' ? useSession() : undefined;
  // const $logger = typeof logger === 'function' ? logger : undefined;

  function API<T>(url: string, opts?: APIOptions<T>) {
    // $logger?.('log', `[call api]: ${url}`);
    // const token = $session?.data.value?.user.token.accessToken;

    return $fetch<NetworkResponse<T>>(url, {
      baseURL: config.public.BASE_API_URL,
      headers: {
        // authorization: token ? `Bearer ${token}` : '',
        // lang: ${LanguageManager().localeSetting.value}
        ...opts?.headers,
      },
      ...opts,
    });
  }

  async function handleCallApi<T>(
    action: () => Promise<NetworkResponse<T>>,
    options?: Options
  ): Promise<AppResponse<T>> {
    try {
      const result = await action();
      const message = options?.successMessage || result.message;
      handleDisplayMessage(options?.canShowSuccessMessage, message);

      return { data: result.data, error: undefined, isOk: true, message, origin: result };
    } catch (error) {
      const e = error as FetchError<NetworkResponse<T>>;
      const message = options?.errorMessage || e.data?.message;
      handleDisplayMessage(options?.canShowErrorMessage, message);
      const newError: AppResponse<T> = {
        data: undefined,
        error: e,
        isOk: false,
        message,
        origin: undefined,
      };
      // $logger?.('error', `[call api error]: `, newError.error.data?.message, newError);

      return newError;
    }
  }

  function handleDisplayMessage(can?: boolean, message?: string) {
    if (can && message) {
      // display message
    }
  }

  return { API, handleCallApi };
}
