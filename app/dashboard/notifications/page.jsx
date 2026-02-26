"use client";
import React from "react";
import { Bell, CheckCircle2, Info, Circle } from "lucide-react";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Ticket Created",
      message:
        'Your ticket "d" has been created and assigned to Dr. Sarah Faculty.',
      timestamp: "22/01/2026, 04:17:01",
      icon: <CheckCircle2 size={20} className="text-emerald-500" />,
      accentColor: "border-l-emerald-500",
      bgColor: "bg-emerald-50/50",
    },
    {
      id: 2,
      type: "success",
      title: "Ticket Created",
      message:
        'Your ticket "some" has been created and assigned to Mike Support.',
      timestamp: "22/01/2026, 04:13:40",
      icon: <CheckCircle2 size={20} className="text-emerald-500" />,
      accentColor: "border-l-emerald-500",
      bgColor: "bg-emerald-50/50",
    },
    {
      id: 3,
      type: "info",
      title: "New Response to Your Ticket",
      message:
        'John Student has responded to your ticket "Unable to access Canvas LMS".',
      timestamp: "22/01/2026, 03:41:54",
      icon: <Info size={20} className="text-lime-600" />,
      accentColor: "border-l-lime-500",
      bgColor: "bg-lime-50/50",
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      {/* HEADER CARD */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center gap-6">
        <div className="w-14 h-14 bg-white border border-lime-100 rounded-2xl flex items-center justify-center text-lime-500 shadow-sm">
          <Bell size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-500 text-sm font-medium">
            Stay updated with your activities
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900 px-1">Notifications</h2>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENT ---

const NotificationCard = ({
  title,
  message,
  timestamp,
  icon,
  accentColor,
  bgColor,
}) => (
  <div
    className={`bg-white border border-gray-100 border-l-4 ${accentColor} rounded-2xl p-5 shadow-sm transition-all hover:shadow-md group`}
  >
    <div className="flex gap-4 items-start">
      {/* Icon Circle */}
      <div
        className={`mt-1 w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center shrink-0`}
      >
        {icon}
      </div>

      <div className="space-y-1 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{message}</p>

        <div className="pt-2">
          <span className="text-xs font-medium text-gray-400">{timestamp}</span>
        </div>
      </div>
    </div>
  </div>
);

export default NotificationsPage;
