// src/components/ai/Chart.tsx
import React from "react";
import { ChartProps } from "../../types/ai/annotation"; // import the type

const Chart: React.FC<ChartProps> = ({ filters }) => {
  // Use filters in the component as needed
  return (
    <div className="chart-container">
      <h2 className="text-xl font-semibold mb-4">Chart for {filters.site}</h2>
      {/* Display chart here, use filters in chart rendering logic */}
      <p>
        Chart data from {filters.dateFrom} to {filters.dateTo}
      </p>
      {/* Render your chart component here */}
    </div>
  );
};

export default Chart;
