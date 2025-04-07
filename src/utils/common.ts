import { UrlParams } from './types';

export const toUrlParams = (params: UrlParams): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value && value !== '') {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
};
