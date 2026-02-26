"use client";
import React, { useState } from "react";
import {
  Link2,
  RefreshCw,
  Upload,
  Download,
  Clock,
  CheckCircle2,
  ChevronRight,
  Users,
  BookOpen,
  UserCheck,
  Award,
  TrendingUp,
} from "lucide-react";

const IntegrationsPage = () => {
  const [activeSubTab, setActiveSubTab] = useState("Canvas LMS");

  const subTabs = ["Canvas LMS", "SIMS", "Launch"];

  return (
    <div className="p-4 md:p-8 space-y-6 animate-in fade-in duration-500">
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Integrations</h1>
          <p className="text-gray-500 text-sm">
            Manage external system integrations
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 font-medium">Last synced:</p>
          <p className="text-sm font-bold text-gray-700">
            2/9/2026, 5:04:18 AM
          </p>
        </div>
      </div>

      {/* TOP SUB-TABS */}
      <div className="flex bg-gray-100 p-1 rounded-2xl w-full">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all ${
              activeSubTab === tab ?
                "bg-cyan-400 text-white shadow-md"
              : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "Canvas LMS" && <Clock size={18} />}
            {tab === "SIMS" && <Users size={18} />}
            {tab === "Launch" && <Link2 size={18} />}
            {tab}
          </button>
        ))}
      </div>

      {/* DYNAMIC CONTENT AREA */}
      {activeSubTab === "Canvas LMS" ?
        <div className="space-y-6">
          {/* CANVAS CONNECTION STATUS */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-500">
                <Link2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Connection Status</h3>
                <p className="text-sm text-gray-500">Canvas LMS Integration</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <ConnectionDetail
                label="Canvas URL"
                value="canvas.university.edu"
              />
              <ConnectionDetail label="API Version" value="v1.0" />
              <ConnectionDetail label="Auto-Sync" value="Enabled" isStatus />
              <StatusBadge status="Connected" />
            </div>
          </div>

          {/* CANVAS DATA SYNC GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SyncCard
              title="Student Data"
              desc="Sync student profiles and enrollment"
              count="1"
              date="2/9/2026"
              btnColor="bg-cyan-400"
            />
            <SyncCard
              title="Course Data"
              desc="Sync courses and schedules"
              count="4"
              date="2/9/2026"
              btnColor="bg-emerald-500"
            />
            <SyncCard
              title="Grade Data"
              desc="Sync grades and assessments"
              count="3"
              date="2/9/2026"
              btnColor="bg-lime-500"
            />
            <SyncCard
              title="Assignment Tracking"
              desc="Sync assignment data"
              count="48"
              date="2/9/2026"
              btnColor="bg-orange-500"
            />
          </div>

          {/* IMPORT / EXPORT SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataActionCard
              type="Import"
              icon={<Upload className="text-cyan-500" size={20} />}
            />
            <DataActionCard
              type="Export"
              icon={<Download className="text-emerald-500" size={20} />}
            />
          </div>
        </div>
      : activeSubTab === "SIMS" ?
        <div className="space-y-6">
          {/* SIMS CONNECTION STATUS */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  SIMS Connection Status
                </h3>
                <p className="text-sm text-gray-500">
                  Student Information Management System
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <ConnectionDetail label="SIMS URL" value="sims.university.edu" />
              <ConnectionDetail label="API Version" value="v2.1" />
              <ConnectionDetail label="Last Sync" value="5:04:18 AM" isTime />
              <StatusBadge status="Connected" />
            </div>
          </div>

          {/* SIMS METRIC CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              icon={<Users size={24} className="text-emerald-500" />}
              value="1"
              label="Active Students"
            />
            <MetricCard
              icon={<BookOpen size={24} className="text-cyan-500" />}
              value="4"
              label="Enrolled Courses"
            />
            <MetricCard
              icon={<UserCheck size={24} className="text-lime-500" />}
              value="1"
              label="Faculty Members"
            />
          </div>

          {/* SIMS SPECIFIC SYNC ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Student Records Sync
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Synchronize student enrollment, attendance, and academic
                  records
                </p>
              </div>
              <button className="w-full bg-emerald-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors shadow-sm">
                <RefreshCw size={20} />
                Sync Student Records
              </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  Attendance Data Sync
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Update attendance records and generate reports
                </p>
              </div>
              <button className="w-full bg-cyan-400 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-500 transition-colors shadow-sm">
                <RefreshCw size={20} />
                Sync Attendance
              </button>
            </div>
          </div>
        </div>
      : <div className="space-y-6">
          {/* LAUNCH CONNECTION STATUS */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Launch Connection Status
                </h3>
                <p className="text-sm text-gray-500">
                  Learning and Achievement Unified Navigation and Certification
                  Hub
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <ConnectionDetail
                label="Launch URL"
                value="launch.university.edu"
              />
              <ConnectionDetail label="API Version" value="v1.5" />
              <ConnectionDetail
                label="Certification Status"
                value="Active"
                isStatus
              />
              <StatusBadge status="Connected" />
            </div>
          </div>

          {/* LAUNCH METRIC CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard
              icon={<Award size={24} className="text-orange-500" />}
              value="42"
              label="Active Certifications"
            />
            <MetricCard
              icon={<CheckCircle2 size={24} className="text-emerald-500" />}
              value="156"
              label="Completed Courses"
            />
            <MetricCard
              icon={<TrendingUp size={24} className="text-lime-500" />}
              value="89"
              label="In Progress"
            />
          </div>

          {/* LAUNCH SPECIFIC SYNC ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  MCT/OC Data Sync
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Synchronize Microsoft Certifications and Online Courses
                </p>
              </div>
              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-sm">
                <RefreshCw size={20} />
                Sync MCT/OC Data
              </button>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-gray-900">
                  Certificate Generation
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Generate and distribute certificates for completed courses
                </p>
              </div>
              <button className="w-full bg-lime-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-lime-600 transition-colors shadow-sm">
                <Download size={20} />
                Generate Certificates
              </button>
            </div>
          </div>
        </div>
      }

      {/* SHARED FOOTER: FULL SYNC SECTION */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-gray-900">Full Synchronization</h3>
          <p className="text-sm text-gray-500">
            Sync all data from {activeSubTab} (students, courses, grades,
            assignments)
          </p>
        </div>
        <button className="bg-cyan-400 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-cyan-500 transition-colors shadow-sm">
          <RefreshCw size={18} />
          Sync All Data
        </button>
      </div>

      {/* SHARED FOOTER: AUTOMATIC SYNC SCHEDULE */}
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="text-orange-500" size={20} />
          <div>
            <h3 className="font-bold text-lg">Automatic Sync Schedule</h3>
            <p className="text-sm text-gray-500">
              Configure automatic synchronization for {activeSubTab}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-1 w-full">
            <label className="text-xs text-gray-400 font-bold mb-2 block uppercase tracking-wider">
              Frequency
            </label>
            <input
              type="text"
              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-200 transition-all"
              placeholder="e.g. Daily"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="text-xs text-gray-400 font-bold mb-2 block uppercase tracking-wider">
              Time
            </label>
            <input
              type="text"
              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-cyan-200 transition-all"
              placeholder="e.g. 12:00 AM"
            />
          </div>
          <button className="w-full md:w-auto bg-cyan-400 text-white px-12 py-4 rounded-xl font-bold hover:bg-cyan-500 transition-all shadow-sm">
            Save Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const ConnectionDetail = ({ label, value, isStatus, isTime }) => (
  <div className="text-center">
    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
      {label}
    </p>
    <p
      className={`text-sm font-bold ${
        isStatus || isTime ? "text-emerald-500" : "text-gray-900"
      }`}
    >
      {value}
    </p>
  </div>
);

const StatusBadge = ({ status }) => (
  <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold flex items-center gap-1.5 border border-emerald-100">
    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
    {status}
  </span>
);

const MetricCard = ({ icon, value, label }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center justify-center text-center space-y-2">
    <div className="mb-2">{icon}</div>
    <p className="text-4xl font-black text-gray-900">{value}</p>
    <p className="text-sm font-medium text-gray-400">{label}</p>
  </div>
);

const SyncCard = ({ title, desc, count, date, btnColor }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4 relative overflow-hidden">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
        <RefreshCw size={20} />
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
    <div className="flex justify-between text-xs pt-2">
      <span className="text-gray-400 font-medium">
        Synced {title.split(" ")[0]}s: <b className="text-gray-800">{count}</b>
      </span>
      <span className="text-gray-400 font-medium">
        Last Updated: <b className="text-gray-800">{date}</b>
      </span>
    </div>
    <button
      className={`w-full py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${btnColor} shadow-sm`}
    >
      <RefreshCw size={16} />
      Sync Now
    </button>
  </div>
);

const DataActionCard = ({ type, icon }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-4">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <h3 className="font-bold text-lg">{type} Data</h3>
    </div>
    <p className="text-sm text-gray-500 pb-2">
      {type === "Import" ?
        "Upload CSV files to import data"
      : "Download data as CSV files"}
    </p>
    <ImportExportButton label={`${type} Students (CSV)`} />
    <ImportExportButton label={`${type} Courses (CSV)`} />
    <ImportExportButton label={`${type} Grades (CSV)`} />
  </div>
);

const ImportExportButton = ({ label }) => (
  <button className="w-full flex justify-center py-3.5 border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors">
    {label}
  </button>
);

export default IntegrationsPage;
