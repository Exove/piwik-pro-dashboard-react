import TextBox from './components/TextBox';
import LineChartBox from './components/LineChartBox';
import PieChartBox from './components/PieChartBox';
import ListBox from './components/ListBox';
import TimeRangeSelector from './components/TimeRangeSelector';
import { useEffect, useState } from 'react';
import {
  fetchDeviceData,
  fetchOverviewData,
  fetchTopPagesData,
} from './services/piwikApi';
import { Period, OverviewData, TopPagesData, DeviceData } from './utils/types';

function App() {
  // React states to store Piwik PRO data
  const [overviewData, setOverviewData] = useState<OverviewData[] | null>(null);
  const [overviewDataAggregated, setOverviewDataAggregated] = useState<
    OverviewData[] | null
  >(null);
  const [deviceData, setDeviceData] = useState<DeviceData[] | null>(null);
  const [topPagesData, setTopPagesData] = useState<TopPagesData[] | null>(null);
  const [period, setPeriod] = useState<Period>('7d');

  // Fetch Piwik PRO data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overview, overviewAggregated, device, topPages] =
          await Promise.all([
            fetchOverviewData('false', period),
            fetchOverviewData('true', period),
            fetchDeviceData(period),
            fetchTopPagesData(period),
          ]);

        setOverviewData(overview);
        setOverviewDataAggregated(overviewAggregated);
        setDeviceData(device);
        setTopPagesData(topPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [period]);

  return (
    <>
      <TimeRangeSelector
        currentValue={period}
        setValue={(value: Period) => setPeriod(value)}
      />
      <div className="tw:text-3xl tw:text-center tw:max-w-7xl tw:mx-auto tw:my-10">
        <div
          className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 
        tw:lg:grid-cols-3 tw:gap-8 tw:mx-4 tw:md:mx-8 tw:lg:mx-12"
        >
          {overviewDataAggregated &&
            overviewDataAggregated.map((item, index) => (
              <TextBox
                key={`vs-${index}`}
                title="Visitors"
                value={item.visitors}
              />
            ))}
          {overviewDataAggregated &&
            overviewDataAggregated.map((item, index) => (
              <TextBox
                key={`pw-${index}`}
                title="Page views"
                value={item.page_views}
              />
            ))}
          {overviewDataAggregated &&
            overviewDataAggregated.map((item, index) => (
              <TextBox
                key={`rvr-${index}`}
                title="Returning visitors rate"
                value={`${(item.returning_visitors_rate * 100).toFixed(2)}%`}
              />
            ))}
          {overviewDataAggregated &&
            overviewDataAggregated.map((item, index) => (
              <TextBox
                key={`br-${index}`}
                title="Bounce rate"
                value={`${(item.bounce_rate * 100).toFixed(2)}%`}
              />
            ))}
          {overviewData && (
            <div className="tw:col-span-full">
              <LineChartBox
                title="Visitors over time"
                data={overviewData.map((item, index) => ({
                  time: item.timestamp__to_date ?? index.toString(),
                  value: item.visitors,
                }))}
              />
            </div>
          )}
          {overviewData && (
            <div className="tw:col-span-full">
              <LineChartBox
                title="Page views over time"
                data={overviewData.map((item, index) => ({
                  time: item.timestamp__to_date ?? index.toString(),
                  value: item.page_views,
                }))}
              />
            </div>
          )}
          {topPagesData && (
            <div className="tw:col-span-full">
              <ListBox
                title="Top pages"
                data={topPagesData.map((page) => ({
                  url: page.event_url,
                  value: page.page_views,
                }))}
              />
            </div>
          )}
          {deviceData && (
            <div className="tw:col-span-full tw:md:col-span-2">
              <PieChartBox
                title="Devices"
                data={deviceData.map((device) => ({
                  name: device.device_type__label ?? 'Other',
                  value: device.sessions,
                }))}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
