import React from "react";

import { AlertTriangle, BatteryCharging, Rss, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card"; // ✅ Fixed missing quote

const DashboardStats = () => {
  // Mock Data (Replace with real-time data later)
  const totalBuoys = 6;
  const activeBuoys = 5;
  const avgBattery = 78; // Percentage
  const activeAlerts = 2;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="flex items-center p-4 space-x-4">
          <Waves className="text-blue-500" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Total Buoys</p>
            <p className="text-xl font-semibold">{totalBuoys}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-4 space-x-4">
          <Rss className="text-green-500" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Active Buoys</p>
            <p className="text-xl font-semibold">{activeBuoys}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-4 space-x-4">
          <BatteryCharging className="text-yellow-500" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Avg. Battery</p>
            <p className="text-xl font-semibold">{avgBattery}%</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-4 space-x-4">
          <AlertTriangle className="text-red-500" size={32} />
          <div>
            <p className="text-gray-500 text-sm">Active Alerts</p>
            <p className="text-xl font-semibold">{activeAlerts}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
