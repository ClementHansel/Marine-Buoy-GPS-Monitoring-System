// src/lib/ai/dataUtils.ts
import { AnnotatedData } from "../../types/ai/annotation"; // Import the defined type

// Utility function to filter data based on date and time range
export const filterDataByDateAndTime = (
  data: AnnotatedData[],
  dateFrom: string,
  dateTo: string,
  timeFrom: string,
  timeTo: string
): AnnotatedData[] => {
  return data.filter((item) => {
    const itemDate = item.date;
    const itemTime = item.time;

    const isDateInRange = itemDate >= dateFrom && itemDate <= dateTo;
    const isTimeInRange = itemTime >= timeFrom && itemTime <= timeTo;

    return isDateInRange && isTimeInRange;
  });
};

// Utility function to filter data by site and sensor
export const filterDataBySiteAndSensor = (
  data: AnnotatedData[],
  site: string,
  sensor: string
): AnnotatedData[] => {
  return data.filter((item) => {
    return (
      (site ? item.site === site : true) &&
      (sensor ? item.sensor === sensor : true)
    );
  });
};

// Function to transform raw data into a suitable format (example: format dates or values)
export const formatData = (data: AnnotatedData[]): AnnotatedData[] => {
  return data.map((item) => ({
    ...item,
    formattedDate: new Date(item.date).toLocaleDateString(),
    formattedTime: new Date(item.time).toLocaleTimeString(),
  }));
};

// Function to get unique sites from the data (for filter options)
export const getUniqueSites = (data: AnnotatedData[]): string[] => {
  const sites = data.map((item) => item.site);
  return [...new Set(sites)];
};

// Function to get unique sensors from the data (for filter options)
export const getUniqueSensors = (data: AnnotatedData[]): string[] => {
  const sensors = data.map((item) => item.sensor);
  return [...new Set(sensors)];
};

// More data handling utilities can be added here as needed
