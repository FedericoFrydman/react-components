import { createSearchParams, URLSearchParamsInit } from 'react-router-dom';

export const buildURL = (path: string, params?: URLSearchParamsInit) => {
  return `${path}${params ? `?${createSearchParams(params)}` : ''}`;
};
