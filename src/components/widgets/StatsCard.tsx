import React from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactElement;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className={`p-4 border rounded-lg shadow-md ${color}`}>
      <div className="flex items-center space-x-2">
        <div className="text-xl">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
