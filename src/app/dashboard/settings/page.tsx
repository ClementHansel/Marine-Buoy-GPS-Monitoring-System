import React from "react";
import { Card } from "@/components/ui/Card";

const SettingsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <Card className="p-4">
        <h2 className="text-lg font-medium">General Settings</h2>
        <p className="text-sm text-gray-600">
          Manage your system preferences here.
        </p>
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-medium">Buoy & Sensor Management</h2>
        <p className="text-sm text-gray-600">
          Configure buoy and sensor settings.
        </p>
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-medium">AI & Analysis</h2>
        <p className="text-sm text-gray-600">
          Customize AI-based analysis and alerts.
        </p>
      </Card>
    </div>
  );
};

export default SettingsPage;
