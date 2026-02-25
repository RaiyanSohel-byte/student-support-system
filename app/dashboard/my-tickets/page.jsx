"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const TICKET_DATA = [
  {
    id: "TKT-1769105732566-805",
    title: "How do I register for classes?",
    desc: "How do I register for classes........",
    status: "assigned",
    priority: "high",
    category: "academic",
    date: "23/01/2026",
    time: "00:15:32",
    responses: 1,
    aiArticle: "How to Register for Classes",
    resolved: false,
  },
  {
    id: "TKT-1705000001-123",
    title: "Unable to access Canvas LMS",
    desc: 'I am getting an error when trying to log into Canvas. The page shows "Invalid credentials" even though my password is correct.',
    status: "resolved",
    priority: "low",
    category: "technical",
    date: "15/01/2025",
    time: "10:30:00",
    responses: 1,
    aiArticle: "Canvas LMS Access Guide",
    resolved: true,
  },
  {
    id: "TKT-1705000001-999",
    title: "Payment Gateway Error",
    desc: "The payment gateway keeps timing out during checkout.",
    status: "escalated",
    priority: "urgent",
    category: "technical",
    date: "15/01/2025",
    time: "10:30:00",
    responses: 1,
    aiArticle: "Payment Troubleshooting",
    resolved: true,
  },
];

const STATUS_OPTIONS = ["All Status", "Assigned", "Resolved", "Escalated"];
const PRIORITY_OPTIONS = ["All Priorities", "Low", "High", "Urgent"];

const MyTicketsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priorities");

  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);

  const statusRef = useRef(null);
  const priorityRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusRef.current && !statusRef.current.contains(event.target))
        setIsStatusOpen(false);
      if (priorityRef.current && !priorityRef.current.contains(event.target))
        setIsPriorityOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtering Logic
  const filteredTickets = TICKET_DATA.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All Status" ||
      ticket.status.toLowerCase() === statusFilter.toLowerCase();

    const matchesPriority =
      priorityFilter === "All Priorities" ||
      ticket.priority.toLowerCase() === priorityFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getBadgeClass = (type) => {
    const styles = {
      assigned: "bg-cyan-50 text-cyan-500",
      resolved: "bg-lime-50 text-lime-600",
      escalated: "bg-orange-50 text-orange-500",
      high: "bg-orange-50 text-orange-500",
      urgent: "bg-red-50 text-red-500",
      low: "bg-lime-50 text-lime-600",
      academic: "bg-green-50 text-green-600",
      technical: "bg-green-50 text-green-600",
    };
    return styles[type.toLowerCase()] || "bg-slate-50 text-slate-500";
  };

  return (
    <div className="p-4 md:p-8 space-y-6 text-slate-800">
      {/* Top Search & Filter Bar */}
      <div className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tickets..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-sky-100 transition-all text-sm"
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          {/* Status Dropdown */}
          <div className="relative flex-1 md:flex-none" ref={statusRef}>
            <button
              onClick={() => {
                setIsStatusOpen(!isStatusOpen);
                setIsPriorityOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              <Filter size={18} /> {statusFilter}
            </button>

            {isStatusOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-[24px] shadow-xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-100">
                {STATUS_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setStatusFilter(opt);
                      setIsStatusOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 rounded-[18px] text-sm font-medium transition-all ${
                      statusFilter === opt ?
                        "bg-[#eef8fb] text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Priority Dropdown */}
          <div className="relative flex-1 md:flex-none" ref={priorityRef}>
            <button
              onClick={() => {
                setIsPriorityOpen(!isPriorityOpen);
                setIsStatusOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
            >
              {priorityFilter}{" "}
              <ChevronDown
                size={18}
                className={`transition-transform ${isPriorityOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isPriorityOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-[24px] shadow-xl z-50 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-100">
                {PRIORITY_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setPriorityFilter(opt);
                      setIsPriorityOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 rounded-[18px] text-sm font-medium transition-all ${
                      priorityFilter === opt ?
                        "bg-[#eef8fb] text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs font-bold text-slate-400 px-1">
        Showing {filteredTickets.length} tickets
      </p>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.length > 0 ?
          filteredTickets.map((ticket, idx) => (
            <Link
              href={`/dashboard/my-tickets/${ticket.id}`}
              key={ticket.id}
              className="block"
            >
              <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {ticket.resolved ?
                      <CheckCircle2 className="text-lime-500 w-5 h-5" />
                    : <Clock className="text-sky-400 w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                          {ticket.title}
                        </h3>
                        <p className="text-sm text-slate-500 line-clamp-1 mb-4">
                          {ticket.desc}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter">
                          {ticket.date}
                        </p>
                        <p className="text-[11px] font-bold text-slate-300 uppercase tracking-tighter mb-1">
                          {ticket.time}
                        </p>
                        <span className="text-[11px] font-bold text-sky-400 uppercase">
                          {ticket.responses} response
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-[10px] font-bold text-slate-300 mr-1 italic tracking-widest">
                        #{ticket.id}
                      </span>
                      {[ticket.status, ticket.priority, ticket.category].map(
                        (tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${getBadgeClass(tag)}`}
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </div>

                    {ticket.aiArticle && (
                      <div className="bg-sky-50/40 rounded-full py-2 px-4 flex items-center gap-2 border border-sky-50/50">
                        <Sparkles size={14} className="text-sky-400" />
                        <p className="text-[11px] font-bold text-sky-400">
                          AI:{" "}
                          <span className="font-medium">
                            Found relevant article:
                          </span>{" "}
                          <span className="italic">"{ticket.aiArticle}"</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))
        : <div className="text-center py-12 bg-white rounded-[24px] border border-dashed border-slate-200">
            <p className="text-slate-400 text-sm font-medium">
              No tickets match your filters.
            </p>
          </div>
        }
      </div>
    </div>
  );
};

export default MyTicketsPage;
