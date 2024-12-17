import React from "react";
import {
  ChevronDown,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";

function FixedHeader() {
  return (
    <div className="flex py-6 pl-4 justify-between items-center bg-white border-b shadow-sm">
      <div className="flex items-center justify-center gap-1">
        <button className="pl-2 text-2xl font-semibold">All Items</button>
        <ChevronDown strokeWidth='3px' className="text-blue-500 font-semibold w-5 h-5" />
      </div>
      <div className="flex gap-6">
        {/* New */}
        <div className=" border-gray-300">
          <Link
            href="#"
            className="flex justify-center items-center px-3 py-2 gap-1 bg-blue-500 rounded-md"
          >
            <Plus className="text-slate-50 w-4 h-4" />
            <span className="text-slate-50">New</span>
          </Link>
        </div>
        {/* Layout */}
        <div className="flex overflow-hidden">
          <button className=" flex justify-center border-r-2 border-gray-200 items-center px-3 py-2 gap-1 bg-slate-200 rounded-l-md">
            <List className="text-slate-800 w-4 h-4" />
          </button>
          <button className="flex justify-center items-center px-3 py-2 gap-1 bg-slate-100 rounded-r-md">
            <LayoutGrid className="text-slate-800 w-4 h-4" />
          </button>
        </div>
        {/* More */}
        <div className="">
          <button className="flex justify-center items-center px-3 py-3 gap-1 bg-slate-100 rounded-md">
            <MoreHorizontal className="text-slate-800 w-4 h-4" />
          </button>
        </div>
        {/* Help */}
        <div className="border-gray-300">
          <button className=" flex justify-center items-center px-3 py-2 gap-1 bg-orange-500 rounded-l-md">
            {/* <Plus className="text-slate-50 w-4 h-4" /> */}
            <span className="text-slate-50 font-bold">?</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
