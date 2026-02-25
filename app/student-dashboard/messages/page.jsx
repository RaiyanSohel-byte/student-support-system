"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Mail,
  Clock,
  AlertCircle,
  DollarSign,
} from "lucide-react";

// Mock data based on the screenshot
const MESSAGES = [
  {
    id: 1,
    priority: "Normal",
    subject: "Microsoft Course Completion",
    sender: "Learning Coach - Sarah Johnson",
    date: "2/7/2026",
    unread: true,
    content:
      "Congratulations on completing your Microsoft course module. Your grades have been updated in the portal.",
  },
  {
    id: 2,
    priority: "Urgent",
    subject: "Payment Reminder - Tuition Balance",
    sender: "Financial Aid Office",
    date: "2/6/2026",
    fullDate: "Friday, February 6, 2026",
    unread: true,
    category: "Payment",
    content:
      "This is a friendly reminder that your tuition payment of $2,500 is due by February 15, 2026. Please visit the Student Portal to make your payment or set up a payment plan. Contact FAO if you need assistance.",
    actionRequired:
      "This message requires your immediate attention. Please take the necessary action as soon as possible.",
    iconType: "finance",
  },
  {
    id: 3,
    priority: "Urgent",
    subject: "Pending Book Fee - CS101",
    sender: "Bookstore",
    date: "2/5/2026",
    unread: false,
    content:
      "You have a pending fee of $120 for the CS101 textbook. Please clear this balance.",
  },
  {
    id: 4,
    priority: "Normal",
    subject: "Course Completion Notice - Academic Affairs",
    sender: "Academic Affairs",
    date: "2/4/2026",
    unread: false,
    content: "Official notice of course completion for the Fall semester.",
  },
  {
    id: 5,
    priority: "Normal",
    subject: "Weekly Check-in: Your Progress",
    sender: "Learning Coach - Sarah Johnson",
    date: "2/3/2026",
    unread: false,
    content:
      "Hi John, let's schedule our weekly check-in to discuss your progress.",
  },
  {
    id: 6,
    priority: "Normal",
    subject: "Registration Opens for Spring",
    sender: "Registrar Office",
    date: "2/1/2026",
    unread: false,
    content:
      "Spring registration will open next Monday. Please review your degree plan.",
  },
];

const MessagesPage = () => {
  const [selectedMsgId, setSelectedMsgId] = useState(null);

  const unreadCount = MESSAGES.filter((m) => m.unread).length;
  const selectedMsg = MESSAGES.find((m) => m.id === selectedMsgId);

  return (
    <div className="p-4 md:p-8 space-y-6 text-slate-800">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold text-slate-900 mb-1">Messages</h1>
        <p className="text-sm text-slate-500 font-medium">
          {unreadCount} unread messages
        </p>
      </header>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-sky-50 focus:border-[#4db8d8] transition-all text-sm font-medium"
          />
        </div>
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center justify-between min-w-[200px] cursor-pointer">
          <span className="text-sm font-medium text-slate-600">
            All Messages
          </span>
          <ChevronDown size={18} className="text-slate-400" />
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[700px]">
        {/* Left Pane: Message List */}
        <div className="col-span-1 lg:col-span-4 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-y-auto p-2 space-y-1">
          {MESSAGES.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedMsgId(msg.id)}
              className={`
                p-4 rounded-xl cursor-pointer transition-all border border-transparent
                ${selectedMsgId === msg.id ? "bg-[#eef8fb] border-[#d2ecf4]" : "hover:bg-slate-50"}
              `}
            >
              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className={`mt-0.5 shrink-0 ${msg.unread ? "text-[#4db8d8]" : "text-slate-300"}`}
                />
                <div className="flex-1 min-w-0">
                  {/* Priority & Unread Dot */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`
                      flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                      ${msg.priority === "Urgent" ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"}
                    `}
                    >
                      {msg.priority === "Urgent" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      )}
                      {msg.priority}
                    </span>
                    {msg.unread && (
                      <span className="w-2 h-2 rounded-full bg-[#4db8d8]" />
                    )}
                  </div>

                  {/* Subject */}
                  <h4
                    className={`text-sm truncate mb-1 ${msg.unread ? "font-bold text-slate-900" : "font-semibold text-slate-700"}`}
                  >
                    {msg.subject}
                  </h4>

                  {/* Sender & Date */}
                  <p className="text-xs text-slate-500 truncate mb-1">
                    {msg.sender}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock size={12} />
                    <span>{msg.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Pane: Message Detail View */}
        <div className="col-span-1 lg:col-span-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col relative">
          {!selectedMsg ?
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 gap-4">
              <Mail size={48} className="text-slate-200 stroke-[1.5]" />
              <p className="text-sm font-medium">
                Select a message to view its content
              </p>
            </div>
          : /* Selected Message State */
            <div className="p-8 flex-1 overflow-y-auto">
              {/* Detail Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {selectedMsg.iconType === "finance" ?
                      <DollarSign className="text-orange-500" size={24} />
                    : <Mail className="text-[#4db8d8]" size={24} />}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">
                      {selectedMsg.subject}
                    </h2>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-bold text-slate-700">
                        {selectedMsg.sender}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Clock size={14} />
                        {selectedMsg.fullDate || selectedMsg.date}
                      </span>
                    </div>
                  </div>
                </div>
                {selectedMsg.category && (
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-widest shrink-0">
                    {selectedMsg.category}
                  </span>
                )}
              </div>

              {/* Message Content */}
              <div className="text-slate-600 text-[15px] leading-relaxed space-y-6">
                <p>{selectedMsg.content}</p>

                {/* Action Required Alert Box */}
                {selectedMsg.actionRequired && (
                  <div className="bg-red-50 border border-red-100 rounded-xl p-5 flex items-start gap-3 mt-8">
                    <AlertCircle
                      className="text-red-500 shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-red-800 mb-1">
                        Action Required
                      </h4>
                      <p className="text-sm text-red-600 leading-relaxed">
                        {selectedMsg.actionRequired}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
