import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import ContentBox from './ContentBox';

interface LineChartBoxProps {
  title: string;
  data: {
    time: string;
    value: number;
  }[];
}

/**
 * Line chart component
 */
export default function LineChartBox({ title, data }: LineChartBoxProps) {
  const content = (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis
            dataKey="time"
            tickFormatter={(timeStr) => {
              const date = new Date(timeStr);
              return date.toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
              });
            }}
            tick={{ fontSize: 16 }}
            interval={1}
          />
          <YAxis
            domain={[
              (dataMin: number) => Math.floor(dataMin * 0.9),
              (dataMax: number) => Math.ceil(dataMax * 1.1),
            ]}
            tick={{ fontSize: 16 }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  return <ContentBox title={title} content={content} />;
}
