import dynamic from "next/dynamic";
import type { Buoy } from "@/types/buoys/buoy";

const Map = dynamic(() => import("@/components/ui/Map"), { ssr: false });

interface BuoyMapProps {
  buoys: Buoy[];
}

const BuoyMap = ({ buoys }: BuoyMapProps) => {
  return <Map buoys={buoys} />; // Pass buoys as props
};

export default BuoyMap;
