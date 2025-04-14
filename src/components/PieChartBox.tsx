import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import ContentBox from './ContentBox';

const COLORS = [
  '#454ade',
  '#e18ad4',
  '#fac05e',
  '#81f4e1',
  '#f24236',
  '#5e0b15',
  '#41ae76',
  '#1c7c54',
];

interface PieChartBoxProps {
  title: string;
  data: {
    name: string;
    value: number;
  }[];
}

/**
 * Pie chart component
 */
export default function PieChartBox({ title, data }: PieChartBoxProps) {
  const content = (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="value"
          label
          minAngle={10}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#fff"
              strokeWidth={1}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: '16px' }} />
      </PieChart>
    </ResponsiveContainer>
  );

  return <ContentBox title={title} content={content} />;
}
