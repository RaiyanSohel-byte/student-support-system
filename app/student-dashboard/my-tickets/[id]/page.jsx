import React from "react";
import {
  ArrowLeft,
  User,
  Calendar,
  Clock,
  MessageSquare,
  Sparkles,
  Send,
  Star,
} from "lucide-react";
import Link from "next/link";

const TicketDetailsPage = () => {
  // Mock data based on the provided screenshots
  const ticket = {
    id: "TKT-1705000001-123",
    title: "Unable to access Canvas LMS",
    description:
      'I am getting an error when trying to log into Canvas. The page shows "Invalid credentials" even though my password is correct.',
    status: "resolved",
    priority: "high",
    category: "technical",
    department: "IT Support",
    studentName: "John Student",
    created: "15/01/2025, 10:30:00",
    lastUpdated: "15/01/2025, 14:20:00",
    aiSuggestion: "Canvas LMS Access Guide",
    conversation: [
      {
        role: "Support",
        name: "Support",
        time: "15/01/2025, 11:00:00",
        message:
          "I have reset your Canvas password. Please check your email for the temporary password and change it upon first login.",
        isStaff: true,
      },
      {
        role: "Student",
        name: "John Student",
        time: "23/01/2026, 04:18:39",
        message: "hello",
        isStaff: false,
      },
    ],
  };

  const getBadgeClass = (type) => {
    const styles = {
      resolved: "bg-lime-50 text-lime-600",
      high: "bg-orange-50 text-orange-500",
      technical: "bg-green-50 text-green-600",
      "it support": "bg-cyan-50 text-cyan-500",
    };
    return styles[type.toLowerCase()] || "bg-slate-50 text-slate-500";
  };

  return (
    <div className="p-4 md:p-8 space-y-6 text-slate-800 relative">
      {/* Back Button */}
      <Link
        href="/student-dashboard/my-tickets"
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors group"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm font-bold">Back to Tickets</span>
      </Link>

      {/* Main Header Card */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 md:p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {ticket.title}
        </h1>
        <p className="text-sm text-slate-500 mb-6">{ticket.description}</p>

        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-50">
          <span className="text-[10px] font-bold text-slate-300 mr-2 italic tracking-widest">
            #{ticket.id}
          </span>
          {[
            ticket.status,
            ticket.priority,
            ticket.category,
            ticket.department,
          ].map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${getBadgeClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Meta Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
            <User size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
              Student
            </p>
            <p className="text-sm font-bold">{ticket.studentName}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
              Created
            </p>
            <p className="text-sm font-bold">{ticket.created}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
              Last Updated
            </p>
            <p className="text-sm font-bold">{ticket.lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* AI Assistant Box */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 flex items-start gap-4 shadow-sm">
        <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
          <MessageSquare size={20} />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-slate-900">
            AI Assistant Suggestion
          </h4>
          <p className="text-xs text-slate-500">
            Found relevant article:{" "}
            <span className="italic">"{ticket.aiSuggestion}"</span>
          </p>
        </div>
      </div>

      {/* Conversation Section */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center gap-2">
          <MessageSquare size={18} className="text-cyan-400" />
          <h3 className="text-sm font-bold">
            Conversation ({ticket.conversation.length})
          </h3>
        </div>

        <div className="p-6 space-y-6">
          {ticket.conversation.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-4 ${!msg.isStaff ? "ml-12" : ""}`}
            >
              <div
                className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-xs ${msg.isStaff ? "bg-cyan-400" : "bg-green-500"}`}
              >
                {msg.isStaff ?
                  <User size={18} />
                : <User size={18} />}
              </div>
              <div
                className={`flex-1 rounded-2xl p-4 ${msg.isStaff ? "bg-slate-50/50" : "bg-slate-50/30"}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-xs font-bold mr-2">{msg.name}</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-tighter">
                      {msg.role}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">
                    {msg.time}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}

          {/* Response Input */}
          <div className="mt-8 border-t border-slate-50 pt-8">
            <div className="relative">
              <textarea
                placeholder="Type your response..."
                className="w-full min-h-[120px] p-4 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-sky-100 transition-all text-sm resize-none"
              />
              <button className="absolute bottom-4 right-4 bg-cyan-100 text-cyan-600 px-6 py-2 rounded-xl flex items-center gap-2 font-bold text-sm hover:bg-cyan-200 transition-colors uppercase tracking-wider">
                <Send size={16} /> Send
              </button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mt-8">
            <h4 className="text-xs font-bold text-slate-900 mb-3">
              Student Feedback
            </h4>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-orange-400 text-orange-400"
                />
              ))}
            </div>
            <p className="text-xs italic text-slate-400">
              "Very helpful and quick response!"
            </p>
          </div>
        </div>
      </div>

      {/* Floating Sparkle Button */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full shadow-lg shadow-sky-200 flex items-center justify-center text-white hover:scale-110 transition-transform z-50">
        <Sparkles size={28} />
      </button>
    </div>
  );
};

export default TicketDetailsPage;
