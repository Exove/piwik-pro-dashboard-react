import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ContentBox from './ContentBox';

const getColor = (index: number, total: number) => {
  const hue = Math.floor((360 / total) * index);
  return `hsl(${hue}, 70%, 50%)`;
};

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
        >
            {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={getColor(index, data.length)} />
            ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: '16px' }} />
        </PieChart>
    </ResponsiveContainer>

  )
  
  return <ContentBox title={title} content={content} />
};