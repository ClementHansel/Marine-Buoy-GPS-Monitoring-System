import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type BuoyData = {
  timestamp: string;
  [buoyId: string]: number | string;
};

type BuoyComparisonChartProps = {
  data: BuoyData[];
  buoys: string[];
};

const BuoyComparisonChart: React.FC<BuoyComparisonChartProps> = ({
  data,
  buoys,
}) => {
  return (
    <div className="w-full h-80 bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Buoy Comparison Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          {buoys.map((buoyId) => (
            <Line
              key={buoyId}
              type="monotone"
              dataKey={buoyId}
              strokeWidth={2}
              stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BuoyComparisonChart;
