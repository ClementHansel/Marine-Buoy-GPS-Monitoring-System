// src/app/dashboard/page.tsx
"use client";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-gray-800">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widget 1 */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Widget 1</h2>
          <p className="text-gray-600">Some content goes here.</p>
        </div>

        {/* Widget 2 */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Widget 2</h2>
          <p className="text-gray-600">More content goes here.</p>
        </div>

        {/* Widget 3 */}
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700">Widget 3</h2>
          <p className="text-gray-600">Another content section.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
