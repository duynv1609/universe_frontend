import type { QueryKey } from '@tanstack/query-core';
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/vue-query';
import type { FetchError } from 'ofetch';
import type { AnySchema } from 'yup';

export type NetworkResponse<T> = {
  code: number;
  data: T;
  message?: string;
};

export type DataWithPagination<T> = {
  data: T[];
  limit: number;
  page: number;
  total: number;
};

export type AppResponse<T> =
  | {
      data: undefined;
      error: FetchError<NetworkResponse<T>>;
      isOk: false;
      origin: undefined;
      message?: string;
    }
  | {
      data: T;
      error: undefined;
      isOk: true;
      origin: NetworkResponse<T>;
      message?: string;
    };

export type ValueOf<T> = T[keyof T];

export type InvertResult<T extends Record<PropertyKey, PropertyKey>> = {
  [P in keyof T as T[P]]: P;
};

export type Shape<Fields extends Record<any, any>> = {
  [Key in keyof Fields]: AnySchema;
};

export type MutationOptions<TData = unknown, TVariables = void> = Omit<
  UseMutationOptions<TData | undefined, unknown, TVariables, unknown>,
  'mutationFn'
>;

export type QueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<TQueryFnData | undefined, TError, TData | undefined, TQueryKey>,
  'queryKey' | 'queryFn'
>;

export type ServerTime = `${number}${number}:${number}${number}:${number}${number}`;

export type ServerDate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type ServerDateTime =
  `${number}${number}${number}${number}-${number}${number}-${number}${number} ${number}${number}:${number}${number}:${number}${number}`;

export type ClientTime = ServerTime;

export type ClientDate =
  `${number}${number}/${number}${number}/${number}${number}${number}${number}`;

export type ClientDateTime =
  `${number}${number}/${number}${number}/${number}${number}${number}${number} ${number}${number}:${number}${number}:${number}${number}`;
