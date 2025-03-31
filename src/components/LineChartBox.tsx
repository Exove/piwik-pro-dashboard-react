import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface LineChartProps {
    title: string;
    data: {
        time: string;
        value: number;
    }[];
  }

/**
 * Simple text box component that displays a title and a value.
 */
export default function LineChartBox({ title, data }: LineChartProps) {

  return (
    <div className='tw:w-full'>
        <div>
            {title}
        </div>
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
    </div>
  );
};
