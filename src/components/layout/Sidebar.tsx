// src/components/layout/Sidebar.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-64",
          "lg:translate-x-0"
        )}
        role="navigation"
        aria-label="Sidebar"
      >
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 text-white hover:text-gray-400"
          aria-label="Close sidebar"
          title="Close sidebar"
        >
          <X size={24} />
        </button>

        <div className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Navigation</h2>
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/annotation"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Annotation
            </Link>
            <Link
              href="/dashboard/cortheaAI"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              CortheaAI
            </Link>
            <Link
              href="/dashboard/monitoring/sensors"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Sensors
            </Link>
            <Link
              href="/dashboard/settings"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Settings
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
