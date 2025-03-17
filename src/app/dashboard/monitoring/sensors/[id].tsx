import React from "react";
import { useParams } from "next/navigation";
import SensorDetails from "@/components/sensors/SensorDetails";

const SensorDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // ✅ Explicitly type `id`

  return (
    <div className="p-6">
      <SensorDetails sensorId={id} /> {/* ✅ Pass correct prop */}
    </div>
  );
};

export default SensorDetailPage;
