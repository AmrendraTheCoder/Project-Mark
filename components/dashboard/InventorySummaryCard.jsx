import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function InventorySummaryCard({ item, customKey }) {
  return (
    <div
      key={customKey}
      className="mb-4 shadow rounded-lg bg-white border border-slate-200 hover:border-blue-400 py-3 px-6 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300"
    >
      <h2 className="uppercase text-sm text-slate-500">{item.title}</h2>
      <h4 className="font-medium text-2xl"> {item.number} </h4>
    </div>
  );
}

export default InventorySummaryCard;
