import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type BatteryHealthChartProps = {
  data: { timestamp: string; batteryLevel: number }[];
};

const BatteryHealthChart: React.FC<BatteryHealthChartProps> = ({ data }) => {
  return (
    <div className="w-full h-64 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Battery Health Over Time</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tick={{ fontSize: 12 }}
            angle={-20}
            textAnchor="end"
          />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Line
            type="monotone"
            dataKey="batteryLevel"
            stroke="#10B981"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BatteryHealthChart;
