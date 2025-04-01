import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface LineChartProps {
    title: string;
    data: {
        time: string;
        value: number;
    }[];
  }

/**
 * Line chart component
 */
export default function LineChartBox({ title, data }: LineChartProps) {

  return (
    <div className="tw:border tw:border-gray-300 tw:text-left tw:w-full">
        <div className="tw:border-b tw:border-gray-300 tw:text-md tw:px-4 tw:py-2 tw:text-gray-500">
            {title}
        </div>
        <div className="tw:text-md tw:px-4 tw:py-8 tw:font-bold tw:content-center">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="time" />
              <YAxis
                domain={[
                  (dataMin: number) => Math.floor(dataMin * 0.9),
                  (dataMax: number) => Math.ceil(dataMax * 1.1),
                ]}/>
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};
