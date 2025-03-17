import { Marker, Popup } from "react-leaflet";
import { Buoy } from "@/types/buoys/buoy";
import { Icon } from "leaflet";

interface BuoyMarkerProps {
  buoy: Buoy;
}

const buoyIcon = new Icon({
  iconUrl: "/icons/buoy.png",
  iconSize: [30, 30],
});

const BuoyMarker = ({ buoy }: BuoyMarkerProps) => {
  return (
    <Marker position={[buoy.latitude, buoy.longitude]} icon={buoyIcon}>
      <Popup>
        <div className="text-center">
          <h3 className="font-bold">{buoy.name}</h3>
          <p>Status: {buoy.status}</p>
          <p>Battery: {buoy.batteryLevel}%</p>
        </div>
      </Popup>
    </Marker>
  );
};

export default BuoyMarker;
