// Format date to "DD-MM-YYYY HH:mm:ss"
export const formatDateTime = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// Capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Generate a unique ID
export const generateUniqueId = (): string => {
  return `id-${Math.random().toString(36).substr(2, 9)}`;
};

// Convert bytes to readable file size format
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};
