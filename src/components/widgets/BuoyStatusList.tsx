import React from "react";
import { BatteryCharging, Rss, AlertTriangle } from "lucide-react";

// Define types for buoy status
interface Buoy {
  id: string;
  name: string;
  battery: number; // Percentage (0-100)
  signal: number; // Strength (0-5 bars)
  location: {
    lat: number;
    lng: number;
  };
}

// Mock data (replace with actual API fetch later)
const mockBuoys: Buoy[] = [
  {
    id: "1",
    name: "Buoy A",
    battery: 85,
    signal: 4,
    location: { lat: -6.2, lng: 106.8 },
  },
  {
    id: "2",
    name: "Buoy B",
    battery: 20,
    signal: 1,
    location: { lat: -6.3, lng: 106.9 },
  }, // Low battery & weak signal
  {
    id: "3",
    name: "Buoy C",
    battery: 50,
    signal: 3,
    location: { lat: -6.4, lng: 107.0 },
  },
];

const BuoyStatusList: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Buoy Status</h2>
      <ul className="space-y-3">
        {mockBuoys.map((buoy) => (
          <li
            key={buoy.id}
            className="flex items-center justify-between p-3 border rounded-lg bg-gray-100"
          >
            <div>
              <h3 className="font-medium">{buoy.name}</h3>
              <p className="text-sm text-gray-500">
                Location: {buoy.location.lat}, {buoy.location.lng}
              </p>
            </div>

            {/* Battery Status */}
            <div className="flex items-center gap-2">
              <BatteryCharging className="w-5 h-5 text-green-500" />
              <span
                className={`${
                  buoy.battery < 25
                    ? "text-red-500 font-semibold"
                    : "text-black"
                }`}
              >
                {buoy.battery}%
              </span>
            </div>

            {/* Signal Strength */}
            <div className="flex items-center gap-2">
              <Rss
                className={`w-5 h-5 ${
                  buoy.signal < 2 ? "text-red-500" : "text-blue-500"
                }`}
              />
              <span
                className={`${
                  buoy.signal < 2 ? "text-red-500 font-semibold" : "text-black"
                }`}
              >
                {buoy.signal} bars
              </span>
            </div>

            {/* Alerts */}
            {(buoy.battery < 25 || buoy.signal < 2) && (
              <div className="flex items-center text-red-600 font-semibold">
                <AlertTriangle className="w-5 h-5 mr-1" />
                <span>Check Buoy</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuoyStatusList;
