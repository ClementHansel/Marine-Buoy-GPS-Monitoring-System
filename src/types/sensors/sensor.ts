export type SensorStatus = "normal" | "warning" | "critical";

export interface Sensor {
  id: string;
  buoyId: string; // Reference to the buoy it belongs to
  name: string;
  type: string;
  value: number;
  unit: string;
  status: SensorStatus;
  lastUpdate: string; // ISO date string
}
