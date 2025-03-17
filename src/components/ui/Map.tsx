"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Buoy } from "@/types/buoys/buoy";

// Fix Leaflet marker issues in Next.js
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Custom Buoy Icons
const defaultIcon = new L.Icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const lowBatteryIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/color/48/low-battery.png",
  shadowUrl: markerShadow.src,
  iconSize: [30, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const noSignalIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/fluency/48/no-wifi.png",
  shadowUrl: markerShadow.src,
  iconSize: [30, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

interface MapProps {
  buoys: Buoy[];
}

const Map = ({ buoys }: MapProps) => {
  const [buoyData, setBuoyData] = useState<Buoy[]>(buoys);

  // Simulate real-time GPS updates & health indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setBuoyData((prevBuoys) =>
        prevBuoys.map((buoy) => ({
          ...buoy,
          latitude: buoy.latitude + (Math.random() - 0.5) * 0.01, // Small random movement
          longitude: buoy.longitude + (Math.random() - 0.5) * 0.01,
          batteryLevel: Math.max(
            0,
            Math.min(100, buoy.batteryLevel + (Math.random() - 0.5) * 10)
          ),
          signalStrength: Math.max(
            0,
            Math.min(5, buoy.signalStrength + Math.floor(Math.random() * 3) - 1)
          ),
          lastUpdate: new Date().toISOString(),
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <MapContainer
        center={[-6.121435, 106.774124]} // Default center (Jakarta)
        zoom={10}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {buoyData.map((buoy) => {
          let buoyIcon = defaultIcon;
          if (buoy.batteryLevel < 20) buoyIcon = lowBatteryIcon;
          else if (buoy.signalStrength <= 1) buoyIcon = noSignalIcon;

          return (
            <Marker
              key={buoy.id}
              position={[buoy.latitude, buoy.longitude]}
              icon={buoyIcon}
            >
              <Popup>
                <strong>{buoy.name}</strong> <br />
                <span
                  className={
                    buoy.status === "active" ? "text-green-600" : "text-red-600"
                  }
                >
                  Status: {buoy.status}
                </span>
                <br />
                🔋 Battery: <strong>{buoy.batteryLevel}%</strong>{" "}
                {buoy.batteryLevel < 20 && (
                  <span className="text-red-600">⚠ Low Battery!</span>
                )}
                <br />
                📶 Signal Strength:{" "}
                <strong>{"★".repeat(buoy.signalStrength)}</strong>{" "}
                {buoy.signalStrength <= 1 && (
                  <span className="text-orange-500">⚠ Weak Signal!</span>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
