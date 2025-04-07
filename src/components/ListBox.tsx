import ContentBox from './ContentBox';

interface ListBoxProps {
  title: string;
  data: {
    url: string;
    value: number;
  }[];
}

/**
 * List component
 */
export default function ListBox({ title, data }: ListBoxProps) {
  const content = (
    <div>
      <table className="tw:w-full tw:divide-y tw:divide-gray-200">
        <thead className="tw:bg-gray-50">
          <tr>
            <th className="tw:px-6 tw:py-3 tw:text-left tw:text-xs tw:font-medium tw:text-gray-500 tw:uppercase">
              Page
            </th>
            <th className="tw:px-6 tw:py-3 tw:text-right tw:text-xs tw:font-medium tw:text-gray-500 tw:uppercase">
              Visitors
            </th>
          </tr>
        </thead>
        <tbody className="tw:bg-white tw:divide-y tw:divide-gray-200 tw:text-sm">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="tw:px-6 tw:py-4 tw:break-all">
                <a
                  href={item.url}
                  target="_blank"
                  className="tw:text-blue-600 tw:hover:underline"
                >
                  {item.url}
                </a>
              </td>
              <td className="tw:px-6 tw:py-4 tw:text-right tw:text-gray-500">
                {item.value.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return <ContentBox title={title} content={content} />;
}
