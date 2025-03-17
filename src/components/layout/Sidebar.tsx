import React from "react";
import { cn } from "@/lib/utils";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  Settings,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean; // Large screen sidebar toggle
  isMobileOpen: boolean; // Mobile sidebar toggle
  toggleSidebar: () => void; // For mobile sidebar
  toggleLargeSidebar: () => void; // For large screen sidebar
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  isMobileOpen,
  toggleSidebar,
  toggleLargeSidebar,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}

      <aside
        className={cn(
          "fixed top-16 h-[calc(100vh-4rem-4rem)] bg-gray-900 text-white shadow-lg transition-all duration-300 ease-in-out",
          isMobileOpen ? "left-0 w-64" : "-left-64",
          isOpen ? "lg:w-64" : "lg:w-16",
          "lg:relative lg:translate-x-0"
        )}
        role="navigation"
        aria-label="Sidebar"
      >
        {/* Close Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 right-4 text-white hover:text-gray-400"
          aria-label="Close sidebar"
          title="Close sidebar"
        >
          <X size={24} />
        </button>

        {/* Expand/Collapse Button for Large Screens */}
        <button
          onClick={toggleLargeSidebar}
          className="hidden lg:flex absolute top-4 right-4 text-white hover:text-gray-400"
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>

        {/* Sidebar Content */}
        <nav className="mt-12 space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center px-4 py-3 space-x-3 hover:bg-gray-700"
          >
            <Home size={24} />
            {isOpen && <span className="text-lg">Dashboard</span>}
          </Link>

          <Link
            href="/dashboard/annotation"
            className="flex items-center px-4 py-3 space-x-3 hover:bg-gray-700"
          >
            <FileText size={24} />
            {isOpen && <span className="text-lg">Annotation</span>}
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex items-center px-4 py-3 space-x-3 hover:bg-gray-700"
          >
            <Settings size={24} />
            {isOpen && <span className="text-lg">Settings</span>}
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
