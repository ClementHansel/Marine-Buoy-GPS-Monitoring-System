// src/app/dashboard/annotation/page.tsx
"use client";
import React, { useState } from "react";
import Filters from "../../../components/ai/Filters"; // assuming Filters component exists
import Chart from "../../../components/ai/Chart";
import AIAnalysis from "../../../components/ai/AIAnalysis";
import Annotate from "../../../components/ai/Annotate";
import AnnotatedList from "../../../components/ai/AnnotatedList";

const AnnotationPage: React.FC = () => {
  // State to hold the applied filters
  const [filters, setFilters] = useState({
    site: "",
    sensor: "",
    dateFrom: "",
    dateTo: "",
    timeFrom: "",
    timeTo: "",
  });

  // Function to update filters from the Filters component
  const handleFilterChange = (newFilters: {
    [key: string]: string | number;
  }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Data Annotation</h1>

      {/* Filters Section */}
      <Filters onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart Section */}
        <div className="col-span-1">
          <Chart filters={filters} />
        </div>

        {/* AI Analysis Section */}
        <div className="col-span-1">
          <AIAnalysis filters={filters} />
        </div>
      </div>

      {/* Annotation Section */}
      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <Annotate filters={filters} />
      </div>

      {/* Annotated List Section */}
      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <AnnotatedList filters={filters} />
      </div>
    </div>
  );
};

export default AnnotationPage;
