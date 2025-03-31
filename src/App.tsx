import TextBox from "./components/TextBox"

function App() {

  const TextBoxData = [
    { title: "Visitors", value: "42" },
    { title: "Page views", value: "142" },
    { title: "Returning visitors", value: "50%" },
    { title: "Bounce rate", value: "33%" },
    { title: "Sample text", value: "312" },
    { title: "Something here", value: "12" },
    { title: "Another metric", value: "1" },
  ]

  return (
    <>
      <div className="tw:text-3xl tw:text-center tw:w-full tw:max-w-7xl tw:mx-5 tw:md-mx-10 tw:lg:mx-auto">
        <h1 className="tw:my-16">Piwik PRO Dashboard</h1>
        <div className="tw:flex tw:flex-wrap tw:gap-8 tw:justify-center">
          {TextBoxData.map((data, index) => (
            <TextBox key={index} title={data.title} value={data.value} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
