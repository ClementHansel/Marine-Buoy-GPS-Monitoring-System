// src/components/ai/AIAnalysis.tsx
import React from "react";
import { AIAnalysisProps } from "../../types/ai/annotation"; // import the type

const AIAnalysis: React.FC<AIAnalysisProps> = ({ filters }) => {
  // Use filters in the component as needed
  return (
    <div className="ai-analysis-container">
      <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
      {/* Display AI analysis data based on the filters */}
      <p>Performing AI analysis for sensor: {filters.sensor}</p>
      {/* You can add more logic to perform the AI analysis here */}
    </div>
  );
};

export default AIAnalysis;
