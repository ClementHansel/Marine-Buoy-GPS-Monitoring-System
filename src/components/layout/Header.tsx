import React from "react";
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Sidebar Toggle Button (Only Visible on Mobile) */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-700"
        aria-label="Open sidebar"
        title="Open sidebar"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-lg font-semibold">Dashboard</h1>

      {/* Right Side - Add user profile, notifications, etc. */}
      <div>Profile</div>
    </nav>
  );
};

export default Navbar;
