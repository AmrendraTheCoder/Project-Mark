import Link from "next/link";
import React from "react";

function Subscription() {
  return (
    <div className="pl-2 pr-3 py-3">
      <div className="rounded-lg p-3 mt-6 bg-slate-900">
        <div className="border-b border-slate-300 pb-3">
          <p className="text-sm border-l-2 border-orange-300 pl-2">
            Your Premium plan's trial expires in{" "}
            <span className="text-orange-300"> 13 days </span>
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          <button className="border-r border-slate-300 py-1.5 pl-1 pr-4">
            Change Plan
          </button>
          <Link href="#" className="py-1.5 pl-2">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
