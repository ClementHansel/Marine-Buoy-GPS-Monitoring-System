"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import SensorList from "@/components/sensors/SensorList";

// Mock data (Replace with API data later)
const sensors = [
  { id: "1", name: "Water Temp", type: "temperature", value: 26.5, unit: "°C" },
  { id: "2", name: "Battery", type: "battery", value: 42, unit: "%" },
  { id: "3", name: "Signal Strength", type: "signal", value: 15, unit: "dB" },
];

const SensorsPage = () => {
  const router = useRouter();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Sensor Monitoring</h1>
      <Card className="p-4">
        <SensorList
          sensors={sensors}
          onSelect={(id) => router.push(`/dashboard/monitoring/sensors/${id}`)}
        />
      </Card>
    </div>
  );
};

export default SensorsPage;
