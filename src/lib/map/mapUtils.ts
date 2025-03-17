export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Radius of Earth in km
  const toRad = (angle: number) => (angle * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km
};

// Convert GPS coordinates to a readable format
export const formatCoordinates = (lat: number, lon: number): string => {
  const format = (value: number, type: string) => {
    const degrees = Math.floor(value);
    const minutes = Math.floor((value - degrees) * 60);
    const seconds = ((value - degrees - minutes / 60) * 3600).toFixed(2);
    return `${degrees}° ${minutes}' ${seconds}" ${type}`;
  };

  return `${format(Math.abs(lat), lat >= 0 ? "N" : "S")} | ${format(
    Math.abs(lon),
    lon >= 0 ? "E" : "W"
  )}`;
};
