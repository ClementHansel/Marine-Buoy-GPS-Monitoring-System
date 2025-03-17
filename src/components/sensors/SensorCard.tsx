import { Sensor } from "@/types/sensors/sensor"; // Correct import

const SensorCard = ({ sensor }: { sensor: Sensor }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{sensor.name}</h3>
      <p className="text-sm text-gray-500">{sensor.type}</p>
      <p className="text-md font-bold">
        {sensor.value} {sensor.unit}
      </p>
      <p className="text-xs text-gray-400">Last updated: {sensor.lastUpdate}</p>
    </div>
  );
};

export default SensorCard;
