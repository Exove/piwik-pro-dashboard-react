import TextBox from "./components/TextBox"
import LineChartBox from "./components/LineChartBox"
import PieChartBox from "./components/PieChartBox"
import ListBox from "./components/ListBox"
function App() {

  // Test data before we get the real data from the API
  const TextBoxData = [
    { title: "Visitors", value: "42" },
    { title: "Page views", value: "142" },
    { title: "Returning visitors", value: "50%" },
    { title: "Bounce rate", value: "33%" },
    { title: "Sample text", value: "312" },
    { title: "Something here", value: "12" },
    { title: "Another metric", value: "1" },
  ]

  const timeSeriesData = [
    {
      "timestamp__to_date": "2021-01-01",
      "visitors": 22,
      "page_views": 80,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.181818181818182
    },
    {
      "timestamp__to_date": "2021-01-02",
      "visitors": 25,
      "page_views": 56,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.12
    },
    {
      "timestamp__to_date": "2021-01-03",
      "visitors": 22,
      "page_views": 66,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.227272727272727
    },
    {
      "timestamp__to_date": "2021-01-04",
      "visitors": 25,
      "page_views": 78,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.32
    },
    {
      "timestamp__to_date": "2021-01-05",
      "visitors": 27,
      "page_views": 63,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.444444444444444
    },
    {
      "timestamp__to_date": "2021-01-06",
      "visitors": 21,
      "page_views": 68,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.238095238095238
    },
    {
      "timestamp__to_date": "2021-01-07",
      "visitors": 18,
      "page_views": 39,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.388888888888889
    },
    {
      "timestamp__to_date": "2021-01-08",
      "visitors": 27,
      "page_views": 87,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.185185185185185
    },
    {
      "timestamp__to_date": "2021-01-09",
      "visitors": 17,
      "page_views": 37,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.411764705882353
    },
    {
      "timestamp__to_date": "2021-01-10",
      "visitors": 21,
      "page_views": 70,
      "returning_visitors_rate": 1,
      "bounce_rate": 0.333333333333333
    }
  ]

  const pieChartData = [
    { name: "Desktop", value: 10304 },
    { name: "Smartphone", value: 6433 },
    { name: "Tablet", value: 183 },
    { name: "Unknown", value: 482 },
  ]

  const mappedData = timeSeriesData.map(item => ({
    time: item.timestamp__to_date,
    value: item.visitors,
  }));

  const topPagesData = [
    {
      "event_url": "https://example.com/page/alpha",
      "page_views": 10142
    },
    {
      "event_url": "https://testsite.org/about",
      "page_views": 7484
    },
    {
      "event_url": "https://demo.fake/page1",
      "page_views": 4916
    },
    {
      "event_url": "https://myfakeurl.net/home",
      "page_views": 4227
    },
    {
      "event_url": "https://dummydata.io/contact",
      "page_views": 4049
    },
    {
      "event_url": "https://placeholder.co/section",
      "page_views": 3434
    },
    {
      "event_url": "https://notreal.org/products",
      "page_views": 1904
    },
    {
      "event_url": "https://sampledomain.info/blog",
      "page_views": 1869
    },
    {
      "event_url": "https://faketestsite.com/info",
      "page_views": 1862
    },
    {
      "event_url": "https://randomurl.fake/overview",
      "page_views": 1805
    }
  ]

  const mappedTopPagesData = topPagesData.map(item => ({
    url: item.event_url,
    value: item.page_views,
  }));

  return (
    <>
      <div className="tw:text-3xl tw:text-center tw:max-w-7xl tw:mx-auto tw:my-10">
        <h1 className="tw:my-16">Piwik PRO Dashboard</h1>
        <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-8 tw:mx-4 tw:md:mx-8 tw:lg:mx-12">
          {TextBoxData.map((data, index) => (
            <div key={index}>
              <TextBox title={data.title} value={data.value} />
            </div>
          ))}
          <div className="tw:col-span-full">
            <LineChartBox title="Visitors over time" data={mappedData} />
          </div>
          <div className="tw:col-span-full">
            <ListBox title="Top pages" data={mappedTopPagesData} />
          </div>
          <div className="tw:col-span-2">
            <PieChartBox title="Devices" data={pieChartData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
