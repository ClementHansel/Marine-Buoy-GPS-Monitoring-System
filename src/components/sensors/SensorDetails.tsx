import React from "react";

interface SensorDetailsProps {
  sensorId: string; // ✅ Ensure sensorId exists
}

const SensorDetails: React.FC<SensorDetailsProps> = ({ sensorId }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Sensor Details</h2>
      <p>Sensor ID: {sensorId}</p>
      {/* Add more sensor details here */}
    </div>
  );
};

export default SensorDetails;
