import React from "react";
import { AlertTriangle, BatteryCharging, Rss } from "lucide-react";

// Define alert types
interface Alert {
  id: string;
  buoy: string;
  type: "Low Battery" | "Weak Signal" | "Offline";
  message: string;
  timestamp: string;
  priority: "High" | "Medium" | "Low";
}

// Mock alerts data
const mockAlerts: Alert[] = [
  {
    id: "1",
    buoy: "Buoy B",
    type: "Low Battery",
    message: "Battery below 20%. Immediate check required.",
    timestamp: "2025-03-17 10:30 AM",
    priority: "High",
  },
  {
    id: "2",
    buoy: "Buoy A",
    type: "Weak Signal",
    message: "Signal strength dropped below 2 bars.",
    timestamp: "2025-03-17 10:15 AM",
    priority: "Medium",
  },
  {
    id: "3",
    buoy: "Buoy C",
    type: "Offline",
    message: "No data received in the last 10 minutes.",
    timestamp: "2025-03-17 09:50 AM",
    priority: "High",
  },
];

const RecentAlerts: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Recent Alerts</h2>
      <ul className="space-y-3">
        {mockAlerts.map((alert) => (
          <li
            key={alert.id}
            className="flex items-start gap-3 p-3 border rounded-lg bg-gray-100"
          >
            {/* Icon based on alert type */}
            <div className="flex-shrink-0">
              {alert.type === "Low Battery" && (
                <BatteryCharging className="w-6 h-6 text-red-500" />
              )}
              {alert.type === "Weak Signal" && (
                <Rss className="w-6 h-6 text-yellow-500" />
              )}
              {alert.type === "Offline" && (
                <AlertTriangle className="w-6 h-6 text-red-600" />
              )}
            </div>

            {/* Alert Details */}
            <div>
              <h3 className="font-medium">{alert.buoy}</h3>
              <p className="text-sm">{alert.message}</p>
              <p
                className={`text-xs font-semibold ${
                  alert.priority === "High"
                    ? "text-red-500"
                    : alert.priority === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {alert.priority} Priority
              </p>
              <p className="text-xs text-gray-500">{alert.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAlerts;
