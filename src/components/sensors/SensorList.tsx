import React from "react";
import { Card } from "@/components/ui/Card";

interface Sensor {
  id: string;
  name: string;
  type: string;
  value: number;
  unit: string;
}

interface SensorListProps {
  sensors: Sensor[];
  onSelect?: (id: string) => void; // ✅ Make `onSelect` optional
}

const SensorList: React.FC<SensorListProps> = ({ sensors, onSelect }) => {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-2">Sensor List</h3>
      <div className="space-y-3">
        {sensors.map((sensor) => (
          <div
            key={sensor.id}
            className="flex items-center justify-between p-2 border rounded-lg cursor-pointer"
            onClick={() => onSelect?.(sensor.id)} // ✅ Call `onSelect` if provided
          >
            <div>
              <p className="text-sm font-medium">{sensor.name}</p>
              <p className="text-xs text-gray-500">{sensor.type}</p>
            </div>
            <span className="text-sm font-semibold">
              {sensor.value} {sensor.unit}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SensorList;
