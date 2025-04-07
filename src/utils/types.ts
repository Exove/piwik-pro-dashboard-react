export type Aggregated = 'true' | 'false';
export type Period = '7d' | '30d';

export interface UrlParams {
    aggregated?: Aggregated;
    range?: Period;
}

export interface OverviewData {
    timestamp__to_date?: string;
    visitors: number;
    page_views: number;
    returning_visitors_rate: number;
    bounce_rate: number;
}

export interface DeviceData {
    device_type__label: string;
    device_type__id: number;
    sessions: number;
}

export interface TopPagesData {
    event_url: string;
    page_views: number;
}