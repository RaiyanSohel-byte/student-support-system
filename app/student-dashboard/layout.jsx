"use client";
import { useState } from "react";

import { X } from "lucide-react";
import Sidebar from "../components/dashboard/SideBar";
import TopBar from "../components/dashboard/TopBar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* 1. Desktop Sidebar (Hidden on Mobile) */}
      <aside className="hidden md:flex md:w-72 bg-white border-r border-slate-100 flex-col">
        <Sidebar />
      </aside>

      {/* 2. Mobile Sidebar Drawer */}
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/50 z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ?
            "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <Sidebar />
      </aside>

      {/* 3. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-slate-50">{children}</main>
      </div>
    </div>
  );
}
