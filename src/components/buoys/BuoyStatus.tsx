import { Buoy } from "@/types/buoys/buoy";
import { BatteryCharging, Signal } from "lucide-react";

interface BuoyStatusProps {
  buoy: Buoy;
}

const BuoyStatus = ({ buoy }: BuoyStatusProps) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-semibold">{buoy.name}</h3>
      <p className="text-sm text-gray-500">{buoy.status}</p>

      <div className="flex items-center gap-2 mt-2">
        <BatteryCharging size={20} className="text-green-500" />
        <span className="text-sm">{buoy.batteryLevel}%</span>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <Signal size={20} className="text-blue-500" />
        <span className="text-sm">{buoy.signalStrength} dBm</span>
      </div>
    </div>
  );
};

export default BuoyStatus;
