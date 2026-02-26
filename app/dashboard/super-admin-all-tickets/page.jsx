"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Clock,
  CheckCircle2,
  UserPlus,
  ArrowUpCircle,
  FileText,
  PlayCircle,
  CheckCircle,
  ArrowLeft,
  X,
} from "lucide-react";

const AllTicketsDashboard = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'assign', 'priority', 'template'

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 text-slate-900 relative">
      {/* GLOBAL HEADER */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            {selectedTicket && (
              <button
                onClick={() => setSelectedTicket(null)}
                className="p-1 hover:bg-slate-200 rounded-full transition-colors mr-1"
              >
                <ArrowLeft size={24} className="text-slate-600" />
              </button>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              All Tickets
            </h1>
          </div>
          <p className="text-slate-500 mt-1 font-medium ml-1">
            Manage and assign support tickets
          </p>
        </div>
        <div className="text-right">
          <span className="text-4xl font-bold text-[#22D3EE]">1</span>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Total Tickets
          </p>
        </div>
      </div>

      <div>
        {selectedTicket ?
          <TicketDetailView
            ticket={selectedTicket}
            onOpenModal={setActiveModal}
          />
        : <ListView onSelectTicket={setSelectedTicket} />}
      </div>

      {/* MODAL OVERLAY SYSTEM */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            {activeModal === "assign" && (
              <AssignModal onClose={() => setActiveModal(null)} />
            )}
            {activeModal === "priority" && (
              <PriorityModal
                ticket={selectedTicket}
                onClose={() => setActiveModal(null)}
              />
            )}
            {activeModal === "template" && (
              <TemplateModal onClose={() => setActiveModal(null)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MODAL COMPONENTS ---

const AssignModal = ({ onClose }) => (
  <div className="p-8">
    <h2 className="text-xl font-bold text-slate-900 mb-6">Assign Ticket</h2>
    <div className="space-y-4">
      <div className="p-4 border border-slate-100 rounded-2xl hover:border-cyan-200 cursor-pointer transition-all group">
        <p className="font-bold text-slate-800 group-hover:text-cyan-600">
          Faculty
        </p>
        <p className="text-xs text-slate-400 font-medium">
          Academic Affairs - faculty
        </p>
      </div>
      <div className="p-4 border border-cyan-500 bg-cyan-50/30 rounded-2xl cursor-pointer">
        <p className="font-bold text-slate-800">Support</p>
        <p className="text-xs text-slate-400 font-medium">
          IT Support - support
        </p>
      </div>
    </div>
    <button
      onClick={onClose}
      className="w-full mt-8 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 hover:bg-slate-50 transition-colors"
    >
      Cancel
    </button>
  </div>
);

const PriorityModal = ({ ticket, onClose }) => (
  <div className="p-8">
    <div className="mb-6">
      <h2 className="text-xl font-bold text-slate-900">Set Ticket Priority</h2>
      <p className="text-xs font-bold text-slate-400 mt-1 uppercase">
        Ticket: <span className="text-slate-600">{ticket?.title}</span>
      </p>
    </div>

    <div className="space-y-3">
      <PriorityOption
        level="Low"
        desc="Non-urgent, can be resolved in regular timeline"
        color="bg-green-500"
      />
      <PriorityOption
        level="Medium"
        desc="Standard priority, normal response time"
        color="bg-cyan-400"
      />
      <PriorityOption
        level="High"
        desc="Important, needs faster resolution"
        color="bg-orange-500"
      />
      <PriorityOption
        level="Urgent"
        desc="Critical issue, immediate attention required"
        color="bg-orange-600"
        active
      />
    </div>

    <div className="mt-6 bg-blue-50/50 p-3 rounded-xl border border-blue-100 flex gap-3">
      <div className="text-blue-500 font-black text-xs italic">ℹ</div>
      <p className="text-[10px] font-bold text-blue-500 leading-tight">
        Priority is institution-controlled to ensure proper resource allocation.
        Students cannot set priority levels.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 mt-8">
      <button className="bg-[#FB923C] text-white py-3 rounded-xl font-bold text-sm">
        Set Priority
      </button>
      <button
        onClick={onClose}
        className="border border-slate-200 text-slate-500 py-3 rounded-xl font-bold text-sm"
      >
        Cancel
      </button>
    </div>
  </div>
);

const TemplateModal = ({ onClose }) => (
  <div className="p-8 max-h-[80vh] overflow-y-auto">
    <h2 className="text-xl font-bold text-slate-900 mb-6">
      Response Templates
    </h2>
    <div className="space-y-4">
      <TemplateCard
        title="Password Reset Instructions"
        used="145"
        dept="IT Support"
      />
      <TemplateCard
        title="Canvas LMS Access Support"
        used="98"
        dept="IT Support"
        active
      />
      <TemplateCard
        title="General Support Response"
        used="203"
        dept="Student Services"
      />
    </div>
    <div className="grid grid-cols-2 gap-3 mt-8">
      <button className="bg-[#A5F3FC] text-cyan-800 py-3 rounded-xl font-bold text-sm">
        Use Template
      </button>
      <button
        onClick={onClose}
        className="border border-slate-200 text-slate-500 py-3 rounded-xl font-bold text-sm"
      >
        Cancel
      </button>
    </div>
  </div>
);

// --- HELPER COMPONENTS ---

const PriorityOption = ({ level, desc, color, active }) => (
  <div
    className={`p-4 rounded-2xl border transition-all cursor-pointer ${active ? "border-orange-500 bg-orange-50/20 shadow-sm" : "border-slate-100 hover:border-slate-200"}`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
      <div>
        <p className="text-sm font-black text-slate-800 leading-none">
          {level}
        </p>
        <p className="text-[10px] font-bold text-slate-400 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

const TemplateCard = ({ title, used, dept, active }) => (
  <div
    className={`p-5 rounded-2xl border ${active ? "border-cyan-400 bg-cyan-50/10" : "border-slate-100"}`}
  >
    <h4 className="text-sm font-black text-slate-800 mb-2">{title}</h4>
    <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-3">
      Hello! To reset your password, please follow these steps: 1. Visit the
      login page...
    </p>
    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tight">
      Used {used} times • {dept}
    </p>
  </div>
);

const TicketDetailView = ({ ticket, onOpenModal }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 animate-in fade-in duration-300">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[13px] font-bold text-slate-300 uppercase tracking-wider">
        {ticket.id}
      </span>
      <Badge color={ticket.statusColor}>Mark In Progress</Badge>
      <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
    </div>
    <h2 className="text-2xl font-bold text-slate-900 mb-3">{ticket.title}</h2>
    <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
      {ticket.description}
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-10">
      <InfoItem label="Student" value={ticket.studentName} />
      <InfoItem label="Category" value={ticket.category} />
      <InfoItem label="Department" value={ticket.department} />
      <InfoItem label="Created" value={ticket.date} />
    </div>

    <div className="flex flex-wrap gap-3 mb-10">
      <ActionButton
        onClick={() => onOpenModal("assign")}
        icon={<UserPlus size={18} />}
        label="Assign to Agent"
        color="bg-[#22D3EE]"
      />
      <ActionButton
        onClick={() => onOpenModal("priority")}
        icon={<ArrowUpCircle size={18} />}
        label="Set Priority"
        color="bg-[#FB923C]"
      />
      <ActionButton
        onClick={() => onOpenModal("template")}
        icon={<FileText size={18} />}
        label="Use Template"
        color="bg-[#22C55E]"
      />
      <ActionButton
        icon={<PlayCircle size={18} />}
        label="Mark In Progress"
        color="bg-[#EA580C]"
      />
      <ActionButton
        icon={<CheckCircle size={18} />}
        label="Mark Resolved"
        color="bg-[#A3E635]"
      />
    </div>

    <hr className="border-slate-100 mb-8" />
    <h3 className="text-sm font-extrabold text-slate-900 mb-6">
      Ticket History
    </h3>
    <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-slate-900">
            {ticket.assignedTo}
          </span>
          <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
            support
          </span>
        </div>
        <span className="text-[11px] font-bold text-slate-400">
          {ticket.date}, {ticket.time}
        </span>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        I have reset your Canvas password. Please check your email for the
        temporary password.
      </p>
    </div>
  </div>
);

const ListView = ({ onSelectTicket }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
          Filters
        </h2>
      </div>
      <div className="space-y-4">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
            size={18}
          />
          <input
            type="text"
            placeholder="Search tickets..."
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl text-sm"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <FilterDropdown label="Status" />
          <FilterDropdown label="Priority" />
          <FilterDropdown label="Department" />
        </div>
      </div>
    </div>
    <div className="space-y-4">
      {ticketData.map((t, i) => (
        <div
          key={i}
          onClick={() => onSelectTicket(t)}
          className="cursor-pointer"
        >
          <TicketCard ticket={t} />
        </div>
      ))}
    </div>
  </div>
);

const FilterDropdown = ({ label }) => (
  <div className="space-y-1.5 flex-1">
    <label className="text-[13px] font-semibold text-slate-700">{label}</label>
    <div className="w-full bg-white border border-slate-200 rounded-xl h-[46px] px-4 flex items-center justify-between">
      <ChevronDown size={18} className="text-slate-300 ml-auto" />
    </div>
  </div>
);

const TicketCard = ({ ticket }) => (
  <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 transition-all group">
    <div className="flex justify-between">
      <div className="flex gap-4">
        {ticket.status === "assigned" ?
          <Clock className="text-[#22D3EE]" size={22} />
        : <CheckCircle2 className="text-[#A3E635]" size={22} />}
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors leading-tight">
            {ticket.title}
          </h3>
          <p className="text-slate-500 text-sm mt-1">{ticket.description}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold text-slate-400">{ticket.date}</p>
        <button className="text-[#22D3EE] text-[11px] font-bold mt-1">
          1 response
        </button>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-4 ml-9">
      <span className="text-[11px] font-bold text-slate-300 uppercase">
        {ticket.id}
      </span>
      <Badge color={ticket.statusColor}>{ticket.status}</Badge>
      <span className="text-[11px] font-bold text-slate-500 ml-2">
        Assigned to:{" "}
        <span className="text-slate-700 font-extrabold">
          {ticket.assignedTo}
        </span>
      </span>
    </div>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-[13px] font-bold text-slate-400 mb-1">{label}:</p>
    <p className="text-[14px] font-extrabold text-slate-800">{value}</p>
  </div>
);

const ActionButton = ({ icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className={`${color} text-white flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[13px] shadow-sm hover:opacity-90 transition-opacity`}
  >
    {icon} {label}
  </button>
);

const Badge = ({ children, color }) => {
  const styles = {
    teal: "bg-[#F0FDFA] text-[#2DD4BF]",
    orange: "bg-[#FFF7ED] text-[#FB923C]",
    green: "bg-[#F7FEE7] text-[#A3E635]",
    red: "bg-[#FEF2F2] text-[#FB7185]",
  };
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tight ${styles[color] || "bg-slate-50 text-slate-400"}`}
    >
      {children}
    </span>
  );
};

const ticketData = [
  {
    id: "#TKT-1705000001-123",
    title: "Unable to access Canvas LMS",
    description: "I am getting an error when trying to log into Canvas...",
    date: "15/01/2025",
    time: "10:30:00",
    status: "in progress",
    statusColor: "orange",
    priority: "high",
    category: "Technical",
    department: "IT Support",
    studentName: "John Student",
    assignedTo: "Mike Support",
  },
  {
    id: "#TKT-1769105732566-805",
    title: "How do I register for classes?",
    description: "I need help with the registration portal...",
    date: "23/01/2026",
    time: "00:15:32",
    status: "assigned",
    statusColor: "teal",
    priority: "medium",
    category: "Academic",
    department: "Academic Affairs",
    studentName: "Alice Walker",
    assignedTo: "Dr. Sarah Faculty",
  },
];

export default AllTicketsDashboard;
