import { UrlParams } from './types';

/**
 * Converts an object of URL parameters to a URL query string.
 *
 * @param params - The parameters to be converted to URL query string
 * @returns - The URL query string
 */
export const toUrlParams = (params: UrlParams): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value && value !== '') {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
};
