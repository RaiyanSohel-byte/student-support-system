"use client";
import React, { useState } from "react";
import {
  FileText,
  Check,
  Power,
  Users,
  Search,
  Plus,
  User,
  X,
} from "lucide-react";

const SavedRepliesManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 text-slate-900 relative">
      {/* 1. HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-slate-900 mb-1 tracking-tight">
            Saved Replies Management
          </h1>
          <p className="text-slate-500 text-sm">
            Manage, approve, and assign saved replies for your team
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#5CD2E6] hover:bg-[#4BC1D5] text-white rounded-xl font-semibold shadow-sm transition-colors text-sm"
        >
          <Plus size={18} strokeWidth={2.5} /> Create Saved Reply
        </button>
      </div>

      {/* 2. METRICS CARDS */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <MetricCard
          label="Total Replies"
          value="1"
          color="text-slate-900"
          icon={<FileText size={32} className="text-[#5CD2E6] stroke-[1.5]" />}
        />
        <MetricCard
          label="Approved"
          value="1"
          color="text-[#84CC16]"
          icon={<Check size={32} className="text-[#84CC16] stroke-[2]" />}
        />
        <MetricCard
          label="Enabled"
          value="1"
          color="text-[#22C55E]"
          icon={<Power size={32} className="text-[#22C55E] stroke-[1.5]" />}
        />
        <MetricCard
          label="Total Usage"
          value="0"
          color="text-slate-900"
          icon={<Users size={32} className="text-[#F97316] stroke-[1.5]" />}
        />
      </div>

      {/* 3. FILTER BAR */}
      <div className="bg-white rounded-[16px] p-4 border border-slate-100 shadow-sm mb-6 flex gap-4">
        <div className="relative flex-1 max-w-[280px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 text-sm"
          />
        </div>
        <div className="flex-1 max-w-[280px] ml-auto">
          <input
            type="text"
            placeholder="Search saved replies..."
            className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm"
          />
        </div>
      </div>

      {/* 4. DATA TABLE */}
      <div className="bg-white rounded-[16px] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-4 px-6 text-sm font-bold text-slate-700">
                Title
              </th>
              <th className="py-4 px-6 text-sm font-bold text-slate-700">
                Category
              </th>
              <th className="py-4 px-6 text-sm font-bold text-slate-700">
                Status
              </th>
              <th className="py-4 px-6 text-sm font-bold text-slate-700">
                Enabled
              </th>
              <th className="py-4 px-6 text-sm font-bold text-slate-700 text-right">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-50">
              <td className="py-5 px-6">
                <p className="font-bold text-slate-900 text-[15px]">g</p>
                <p className="text-slate-500 text-sm">dgdgdfgdfg</p>
              </td>
              <td className="py-5 px-6 text-sm">Account</td>
              <td className="py-5 px-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#DCFCE7] text-[#16A34A]">
                  approved
                </span>
              </td>
              <td className="py-5 px-6">
                <div className="w-11 h-6 bg-[#22C55E] rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </td>
              <td className="py-5 px-6 text-sm font-semibold text-right">0</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- CREATE MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px]">
          <div className="bg-white rounded-[20px] w-full max-w-[650px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Create Saved Reply
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              {/* Title Field */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Password Reset Instructions"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5CD2E6]/20 focus:border-[#5CD2E6] outline-none transition-all placeholder:text-slate-300"
                />
              </div>

              {/* Reply Content Field */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Reply Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter the saved reply text..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5CD2E6]/20 focus:border-[#5CD2E6] outline-none transition-all resize-none placeholder:text-slate-300"
                />
              </div>

              {/* Grid for Category & Department */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5CD2E6]/20 focus:border-[#5CD2E6] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#5CD2E6]/20 focus:border-[#5CD2E6] outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 bg-slate-50/50 flex gap-4">
              <button className="flex-1 py-3.5 bg-[#5CD2E6] hover:bg-[#4BC1D5] text-white rounded-xl font-bold transition-colors shadow-sm">
                Create Reply
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MetricCard = ({ label, value, color, icon }) => (
  <div className="bg-white rounded-[16px] p-6 border border-slate-100 shadow-sm flex justify-between items-center">
    <div>
      <p className="text-sm font-medium text-slate-500 mb-2">{label}</p>
      <h3 className={`text-3xl font-bold leading-none ${color}`}>{value}</h3>
    </div>
    {icon}
  </div>
);

export default SavedRepliesManagement;
