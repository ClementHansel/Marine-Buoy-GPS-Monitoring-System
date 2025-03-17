// src/components/ai/Filters.tsx
import React, { useState } from "react";

interface FiltersProps {
  onFilterChange: (filters: { [key: string]: string | number }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [site, setSite] = useState<string>("");
  const [sensor, setSensor] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [timeFrom, setTimeFrom] = useState<string>("");
  const [timeTo, setTimeTo] = useState<string>("");

  // Handle filter changes and pass the updated filters to parent component
  const handleFilterChange = () => {
    onFilterChange({
      site,
      sensor,
      dateFrom,
      dateTo,
      timeFrom,
      timeTo,
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Site Filter */}
        <div>
          <label
            htmlFor="site"
            className="block text-sm font-medium text-gray-700"
          >
            Site
          </label>
          <input
            id="site"
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter site name"
            title="Enter the name of the site"
          />
        </div>

        {/* Sensor Filter */}
        <div>
          <label
            htmlFor="sensor"
            className="block text-sm font-medium text-gray-700"
          >
            Sensor
          </label>
          <input
            id="sensor"
            type="text"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter sensor name"
            title="Enter the name of the sensor"
          />
        </div>

        {/* Date From Filter */}
        <div>
          <label
            htmlFor="dateFrom"
            className="block text-sm font-medium text-gray-700"
          >
            Date From
          </label>
          <input
            id="dateFrom"
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            title="Select the start date"
          />
        </div>

        {/* Date To Filter */}
        <div>
          <label
            htmlFor="dateTo"
            className="block text-sm font-medium text-gray-700"
          >
            Date To
          </label>
          <input
            id="dateTo"
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            title="Select the end date"
          />
        </div>

        {/* Time From Filter */}
        <div>
          <label
            htmlFor="timeFrom"
            className="block text-sm font-medium text-gray-700"
          >
            Time From
          </label>
          <input
            id="timeFrom"
            type="time"
            value={timeFrom}
            onChange={(e) => setTimeFrom(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            title="Select the start time"
          />
        </div>

        {/* Time To Filter */}
        <div>
          <label
            htmlFor="timeTo"
            className="block text-sm font-medium text-gray-700"
          >
            Time To
          </label>
          <input
            id="timeTo"
            type="time"
            value={timeTo}
            onChange={(e) => setTimeTo(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            title="Select the end time"
          />
        </div>

        <div className="col-span-2 mt-4">
          <button
            onClick={handleFilterChange}
            className="px-4 py-2 bg-blue-600 text-white rounded-md w-full"
            title="Apply selected filters"
            disabled={
              !site && !sensor && !dateFrom && !dateTo && !timeFrom && !timeTo
            } // Disable button if no filter is set
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
