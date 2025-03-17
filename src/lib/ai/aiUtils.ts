// src/lib/ai/aiUtils.ts
import { AnnotatedData } from "../../types/ai/annotation"; // Import the defined type

// Example function to perform AI analysis (e.g., anomaly detection or classification)
export const performAIAnalysis = (data: AnnotatedData[]): string => {
  // Placeholder for AI analysis logic
  if (data.length === 0) {
    return "No data available for analysis.";
  }

  // Example: Analyze data and return results (this is just a mock logic)
  const result = data.some((item) => item.value > 100)
    ? "Anomaly Detected"
    : "Data is normal";
  return result;
};

// Example function to classify data (e.g., "Good", "Bad", or "Anomaly")
export const classifyData = (data: AnnotatedData): string => {
  // Placeholder classification logic (can be AI or rule-based)
  if (data.value > 100) {
    return "Anomaly";
  }
  return "Good";
};

// Example function to compare filtered data with the entire dataset
export const compareData = (
  filteredData: AnnotatedData[],
  fullData: AnnotatedData[]
): string => {
  const filteredDataCount = filteredData.length;
  const totalDataCount = fullData.length;

  if (filteredDataCount === totalDataCount) {
    return "Filtered data matches the entire dataset.";
  } else {
    return `Filtered data is a subset of the entire dataset. (${filteredDataCount}/${totalDataCount})`;
  }
};

// More AI-related utility functions can be added here as needed
