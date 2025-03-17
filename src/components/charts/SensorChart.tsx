"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock Sensor Data
const mockData = {
  temperature: [
    { time: "00:00", value: 25 },
    { time: "01:00", value: 24 },
    { time: "02:00", value: 23 },
    { time: "03:00", value: 22 },
    { time: "04:00", value: 21 },
  ],
  battery: [
    { time: "00:00", value: 98 },
    { time: "01:00", value: 97 },
    { time: "02:00", value: 96 },
    { time: "03:00", value: 95 },
    { time: "04:00", value: 94 },
  ],
  signal: [
    { time: "00:00", value: 80 },
    { time: "01:00", value: 78 },
    { time: "02:00", value: 76 },
    { time: "03:00", value: 74 },
    { time: "04:00", value: 72 },
  ],
};

const SensorChart = () => {
  const [selectedSensor, setSelectedSensor] = useState<
    "temperature" | "battery" | "signal"
  >("temperature");

  return (
    <Card title="Sensor Data">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Sensor Chart</h3>
        <Select
          onValueChange={(value: "temperature" | "battery" | "signal") =>
            setSelectedSensor(value)
          }
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Sensor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="temperature">Temperature</SelectItem>
            <SelectItem value="battery">Battery</SelectItem>
            <SelectItem value="signal">Signal Strength</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData[selectedSensor]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SensorChart;
