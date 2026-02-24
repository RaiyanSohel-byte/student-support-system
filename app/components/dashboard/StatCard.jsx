import React from "react";

const StatCard = ({ title, value, subtext, icon, valueColor }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>

          <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
        </div>
        <p className="text-sm font-semibold text-slate-600">{title}</p>{" "}
        <p className="text-xs text-slate-400">{subtext}</p>
      </div>
    </div>
  );
};

export default StatCard;
