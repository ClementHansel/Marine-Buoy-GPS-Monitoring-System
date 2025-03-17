// src/app/dashboard/layout.tsx
"use client";
import React, { useState } from "react";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-white"
            aria-label="Open sidebar"
            title="Open sidebar"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 overflow-auto">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-600 p-4 text-white text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
