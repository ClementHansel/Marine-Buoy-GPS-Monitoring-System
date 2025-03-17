"use client";
import React, { useState } from "react";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Default expanded
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white flex items-center justify-between">
        <button
          onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
          className="lg:hidden text-white"
          aria-label="Open sidebar"
          title="Open sidebar"
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        {/* Toggle Sidebar on Large Screens */}
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="hidden lg:block text-white"
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          {isSidebarOpen ? "⬅️" : "➡️"}
        </button>
      </header>

      {/* Middle Section (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden z-10">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          isMobileOpen={isMobileSidebarOpen}
          toggleSidebar={() => setMobileSidebarOpen(!isMobileSidebarOpen)}
          toggleLargeSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />

        {/* Main Content - Adjust width dynamically */}
        <main
          className={`flex-1 p-4 overflow-auto transition-all ${
            isSidebarOpen ? "lg:ml-16" : "lg:ml-12"
          }`}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
