import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function SalesActivityCard({ item, customKey }) {
  return (
    <div>
      <Link
        href={item.href}
        key={customKey}
        className={`shadow rounded-lg bg-white border border-slate-200 hover:border-blue-600 px-2 py-10 cursor-pointer flex flex-col items-center gap-3 transition-all duration-300 `}
      >
        <h4 className={`font-semibold text-5xl ${item.color}`}>
          {item.number}
        </h4>
        <small className="text-slate-600">{item.unit}</small>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="text-xs text-slate-500 w-4 h-4" />
          <span className="text-slate-500 uppercase text-xs items-center">
            {item.title}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default SalesActivityCard;
