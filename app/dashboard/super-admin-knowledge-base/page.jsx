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
  LayoutDashboard,
  Ticket,
  MessageSquare,
  BookOpen,
  Users,
  Bell,
  Plug,
  BarChart2,
  Plus,
  Eye,
  ThumbsUp,
  Tag,
  Edit3,
  X,
  Check,
} from "lucide-react";

export default function AdminDashboardPortal() {
  const [currentNav, setCurrentNav] = useState("knowledge-base"); // 'tickets' | 'knowledge-base'

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-screen overflow-y-auto relative">
        {currentNav === "tickets" && <AllTicketsFlow />}
        {currentNav === "knowledge-base" && <KnowledgeBaseFlow />}
      </main>
    </div>
  );
}

// ==========================================
// KNOWLEDGE BASE FLOW
// ==========================================

const KnowledgeBaseFlow = () => {
  const [activeModal, setActiveModal] = useState(null); // null, 'create', or article object

  const isCreate = activeModal === "create";

  return (
    <div className="p-8 mx-auto">
      {/* KB HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Knowledge Base Management
          </h1>
          <p className="text-slate-500 mt-1 font-medium">
            Create and manage help articles
          </p>
        </div>
        <button
          onClick={() => setActiveModal("create")}
          className="bg-[#22D3EE] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Plus size={18} /> Create Article
        </button>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total articles"
          value="5"
          icon={<FileText className="text-[#38BDF8]" size={24} />}
        />
        <StatCard
          title="Total Views"
          value="9,600"
          icon={<Eye className="text-[#4ADE80]" size={24} />}
        />
        <StatCard
          title="Helpful ratings"
          value="2255"
          icon={<ThumbsUp className="text-[#FACC15]" size={24} />}
        />
        <StatCard
          title="Categories"
          value="5"
          icon={<Tag className="text-[#FB923C]" size={24} />}
        />
      </div>

      {/* FILTERS */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-2xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
            size={18}
          />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
        <div className="w-64 bg-white border border-slate-200 rounded-xl px-4 flex items-center justify-between cursor-pointer">
          <span className="text-sm font-semibold text-slate-600">
            Select Department
          </span>
          <ChevronDown size={18} className="text-slate-300" />
        </div>
      </div>

      {/* ARTICLE LIST */}
      <div className="space-y-4">
        {kbData.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-slate-300 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {article.title}
                </h3>
                <span className="bg-blue-50 text-blue-500 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tight">
                  {article.category}
                </span>
                <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tight flex items-center gap-1">
                  <Check size={12} strokeWidth={3} /> Published
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-orange-200 text-orange-500 rounded-lg text-xs font-bold hover:bg-orange-50 transition-colors">
                  <X size={14} strokeWidth={3} /> Unpublish
                </button>
                <button
                  onClick={() => setActiveModal(article)}
                  className="p-2 border border-slate-200 text-slate-400 rounded-lg hover:bg-slate-50 hover:text-slate-600 transition-colors"
                >
                  <Edit3 size={16} />
                </button>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {article.description}
            </p>

            <div className="grid grid-cols-5 gap-4 mb-5">
              <KBStat label="Department" value={article.department} isText />
              <KBStat label="Views" value={article.views} />
              <KBStat
                label="Helpful"
                value={article.helpful}
                icon={<ThumbsUp size={12} className="text-slate-400" />}
              />
              <KBStat label="Not Helpful" value={article.notHelpful} />
              <KBStat label="Rating" value={article.rating} isGreen />
            </div>

            <p className="text-[11px] font-bold text-slate-400">
              Created by {article.author} on {article.createdDate} • Last
              updated {article.updatedDate}
            </p>
          </div>
        ))}
      </div>

      {/* CREATE / EDIT MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {isCreate ? "Create Article" : "Edit Article"}
              </h2>

              <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-3 mb-6 flex items-start gap-2">
                <span className="text-[12px] font-medium text-green-700 leading-tight flex items-center gap-1">
                  <Check size={14} strokeWidth={3} />
                  <span className="font-bold">Super Admin:</span> Your articles
                  will be automatically published and visible to all students.
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-[13px] font-bold text-slate-700 block mb-1.5">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={isCreate ? "" : activeModal.title}
                    placeholder="Enter article title"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-bold text-slate-700 block mb-1.5">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Enter article content..."
                    defaultValue={isCreate ? "" : activeModal.description}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-[13px] font-bold text-slate-700 block mb-1.5">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="w-full bg-white border border-slate-200 rounded-xl h-[46px] px-4 flex items-center justify-between cursor-pointer">
                      <span
                        className={`text-sm font-semibold ${isCreate ? "text-slate-400" : "text-slate-900"}`}
                      >
                        {isCreate ? "Select Category" : activeModal.category}
                      </span>
                      <ChevronDown size={18} className="text-slate-300" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[13px] font-bold text-slate-700 block mb-1.5">
                      Department <span className="text-red-500">*</span>
                    </label>
                    <div className="w-full bg-white border border-slate-200 rounded-xl h-[46px] px-4 flex items-center justify-between cursor-pointer">
                      <span
                        className={`text-sm font-semibold ${isCreate ? "text-slate-400" : "text-slate-900"}`}
                      >
                        {isCreate ?
                          "Select Department"
                        : activeModal.department}
                      </span>
                      <ChevronDown size={18} className="text-slate-300" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-bold text-slate-700 block mb-1.5">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    defaultValue={
                      isCreate ? "" : "password, reset, login, account"
                    }
                    placeholder="e.g. login, reset, account"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-[#5AC7DB] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 flex items-center justify-center gap-2">
                  <Check size={18} />
                  {isCreate ? "Create Article" : "Update Article"}
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="border border-slate-200 text-slate-700 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  <X size={18} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// ALL TICKETS FLOW
// ==========================================

const AllTicketsFlow = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="p-8 mx-auto relative">
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

// ==========================================
// SHARED & SUB-COMPONENTS
// ==========================================

const NavItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors font-bold text-sm ${
      active ?
        "bg-[#22D3EE] text-white shadow-sm"
      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
    <div>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">
        {title}
      </p>
      <p className="text-3xl font-black text-slate-900">{value}</p>
    </div>
    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
      {icon}
    </div>
  </div>
);

const KBStat = ({ label, value, icon, isText, isGreen }) => (
  <div>
    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mb-1">
      {label}
    </p>
    <p
      className={`text-sm font-extrabold flex items-center gap-1.5 ${
        isText ? "text-slate-800" : "text-slate-900"
      } ${isGreen ? "text-green-500" : ""}`}
    >
      {value} {icon && icon}{" "}
      {isGreen && (
        <ArrowUpCircle size={14} className="text-green-500" strokeWidth={3} />
      )}
    </p>
  </div>
);

// --- Ticket Sub-Components ---
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
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FilterDropdown label="Status" />
          <FilterDropdown label="Priority" />
          <FilterDropdown label="Department" />
        </div>
      </div>
    </div>
    <div className="space-y-4">
      {ticketData.map((ticket, idx) => (
        <div
          key={idx}
          onClick={() => onSelectTicket(ticket)}
          className="cursor-pointer"
        >
          <TicketCard ticket={ticket} />
        </div>
      ))}
    </div>
  </div>
);

const TicketDetailView = ({ ticket, onOpenModal }) => (
  <div className="space-y-6 animate-in fade-in duration-300">
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[13px] font-bold text-slate-300 uppercase tracking-wider">
          {ticket.id}
        </span>
        <Badge color={ticket.statusColor}>{ticket.status}</Badge>
        <div className="w-2.5 h-2.5 rounded-full bg-orange-500 ml-1"></div>
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
        <InfoItem label="Priority" value={ticket.priority} isCapitalized />
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
      <div>
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
            temporary password and change it upon first login.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --- Modals & Cards ---
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
      <div className="p-4 rounded-2xl border border-slate-100 flex items-center gap-3 cursor-pointer hover:border-slate-200">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        <div>
          <p className="text-sm font-black text-slate-800">Low</p>
        </div>
      </div>
      <div className="p-4 rounded-2xl border border-orange-500 bg-orange-50/20 shadow-sm flex items-center gap-3 cursor-pointer">
        <div className="w-2.5 h-2.5 rounded-full bg-orange-600"></div>
        <div>
          <p className="text-sm font-black text-slate-800">Urgent</p>
          <p className="text-[10px] font-bold text-slate-400 mt-1">
            Critical issue, immediate attention required
          </p>
        </div>
      </div>
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
      <div className="p-5 rounded-2xl border border-cyan-400 bg-cyan-50/10">
        <h4 className="text-sm font-black text-slate-800 mb-2">
          Canvas LMS Access Support
        </h4>
        <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-3">
          Hello! To reset your password...
        </p>
      </div>
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

const FilterDropdown = ({ label }) => (
  <div className="space-y-1.5 flex-1">
    <label className="text-[13px] font-semibold text-slate-700">{label}</label>
    <div className="w-full bg-white border border-slate-200 rounded-xl h-[46px] px-4 flex items-center justify-between">
      <span className="text-sm text-slate-400"></span>
      <ChevronDown size={18} className="text-slate-300" />
    </div>
  </div>
);

const TicketCard = ({ ticket }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-slate-300 transition-all group">
    <div className="flex justify-between items-start">
      <div className="flex gap-4">
        <div className="mt-1">
          {ticket.status === "assigned" ?
            <Clock className="text-[#22D3EE]" size={22} />
          : <CheckCircle2 className="text-[#A3E635]" size={22} />}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors leading-tight">
            {ticket.title}
          </h3>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            {ticket.description}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[11px] font-bold text-slate-400">{ticket.date}</p>
        <p className="text-[11px] font-bold text-slate-400">{ticket.time}</p>
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
      <Badge color={ticket.categoryColor}>{ticket.category}</Badge>
      <span className="text-[11px] font-bold text-slate-500 ml-2">
        Assigned to:{" "}
        <span className="text-slate-700 font-extrabold">
          {ticket.assignedTo}
        </span>
      </span>
    </div>
  </div>
);

const InfoItem = ({ label, value, isCapitalized }) => (
  <div>
    <p className="text-[13px] font-bold text-slate-400 mb-1">{label}:</p>
    <p
      className={`text-[14px] font-extrabold text-slate-800 ${
        isCapitalized ? "capitalize" : ""
      }`}
    >
      {value}
    </p>
  </div>
);

const ActionButton = ({ icon, label, color, onClick }) => (
  <button
    onClick={onClick}
    className={`${color} text-white flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[13px] shadow-sm hover:opacity-90`}
  >
    {icon}
    {label}
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
      className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-tight ${
        styles[color] || "bg-slate-50 text-slate-400"
      }`}
    >
      {children}
    </span>
  );
};

// ==========================================
// MOCK DATA
// ==========================================

const ticketData = [
  {
    id: "#TKT-1705000001-123",
    title: "Unable to access Canvas LMS",
    description: "I am getting an error when trying to log into Canvas.",
    date: "15/01/2025",
    time: "10:30:00",
    status: "in progress",
    statusColor: "orange",
    priority: "high",
    category: "Technical",
    categoryColor: "green",
    department: "IT Support",
    studentName: "John Student",
    assignedTo: "Mike Support",
  },
  {
    id: "#TKT-1769105732566-805",
    title: "How do I register for classes?",
    description: "I need help with the registration portal.",
    date: "23/01/2026",
    time: "00:15:32",
    status: "assigned",
    statusColor: "teal",
    priority: "medium",
    category: "Academic",
    categoryColor: "green",
    department: "Academic Affairs",
    studentName: "Alice Walker",
    assignedTo: "Dr. Sarah Faculty",
  },
];

const kbData = [
  {
    title: "How to Reset Your Password",
    category: "Account & Login",
    description:
      'To reset your password: 1) Go to login page, 2) Click "Forgot Password", 3) Enter your email, 4) Check your email for reset link, 5) Create a new password.',
    department: "IT Support",
    views: "1,200",
    helpful: "320",
    notHelpful: "15",
    rating: "95%",
    author: "System Admin",
    createdDate: "15/01/2024",
    updatedDate: "05/02/2025",
  },
  {
    title: "Canvas LMS Access Guide",
    category: "Academic",
    description:
      "Access Canvas at canvas.university.edu using your university credentials. All course materials, assignments, and grades are available through Canvas.",
    department: "Academic Affairs",
    views: "2,156",
    helpful: "890",
    notHelpful: "42",
    rating: "95%",
    author: "System Admin",
    createdDate: "10/12/2024",
    updatedDate: "15/01/2025",
  },
  {
    title: "How to Register for Classes",
    category: "Registration",
    description:
      "Class registration opens during designated periods. Log into the Student Portal, navigate to Registration, search for courses, and add them to your schedule. Ensure prerequisites are met.",
    department: "Registrar",
    views: "3,405",
    helpful: "1,250",
    notHelpful: "85",
    rating: "93%",
    author: "System Admin",
    createdDate: "05/11/2024",
    updatedDate: "10/01/2025",
  },
];
