export type BuoyStatus = "active" | "inactive" | "error";

export interface Buoy {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  batteryLevel: number; // in percentage (0-100%)
  signalStrength: number; // in dB (1-5)
  status: BuoyStatus;
  lastUpdate: string; // ISO date string
}
