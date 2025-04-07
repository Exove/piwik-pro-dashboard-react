import { OverviewData, UrlParams, Aggregated, Period, DeviceData, TopPagesData } from '../utils/types';
import { toUrlParams } from '../utils/common';

const BASE_URL = '/api/piwik-dashboard';

const fetchData = async (baseUrl: string, params: UrlParams) => {
    try {
      const paramsString = toUrlParams(params);
      const url = paramsString ? `${baseUrl}?${paramsString}` : baseUrl;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `API error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data && Array.isArray(data.data)) {
        return data.data;
      } else {
        console.warn('Unexpected data format:', data);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch Piwik PRO data:', error);
      return null;
    }
  };


export const fetchOverviewData = async (aggregated: Aggregated, range: Period): Promise<OverviewData[] | null> => {
    const url = `${BASE_URL}/overview`;
    return await fetchData(url, {
        aggregated,
        range,
    });
}

export const fetchDeviceData = async (range: Period): Promise<DeviceData[] | null> => {
    const url = `${BASE_URL}/devices`;
    return await fetchData(url, { range });
}

export const fetchTopPagesData = async (range: Period): Promise<TopPagesData[] | null> => {
    const url = `${BASE_URL}/top-pages`;
    return await fetchData(url, { range });
}