export const mockAIData = [
  {
    id: "1",
    timestamp: "2025-03-18T08:00:00Z",
    sensorId: "sensor-001",
    site: "North Jakarta",
    readings: {
      temperature: 28.5,
      salinity: 35.2,
      turbidity: 4.5,
    },
    aiAnalysis: {
      anomalyDetected: true,
      insight:
        "Unusual turbidity level detected. Possible storm or sediment disturbance.",
      confidence: 0.92,
    },
    userAnnotation: "Confirmed anomaly due to bad weather.",
  },
  {
    id: "2",
    timestamp: "2025-03-18T09:00:00Z",
    sensorId: "sensor-002",
    site: "Thousand Islands",
    readings: {
      temperature: 29.1,
      salinity: 34.8,
      turbidity: 2.1,
    },
    aiAnalysis: {
      anomalyDetected: false,
      insight: "Normal conditions observed.",
      confidence: 0.98,
    },
    userAnnotation: "No issues found.",
  },
];
