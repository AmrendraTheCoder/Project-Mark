import {
  History,
  Plus,
  Users2,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

function Header() {
  return (
    <div className="bg-gray-100 h-[6.6vh] flex items-center justify-between px-3 border-b border-slate-200 shadow">
      <div className="flex gap-3 px-2">
        {/* Recent Activites */}
        <button>
          <History className="w-5 h-5 " />
        </button>
        {/* Search Bar */}
        <SearchInput />
      </div>
      <div className="flex justify-center items-center gap-3">
        {/* 1st Part of the Right Top Corner */}

        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>

        {/* 2nd Part of the Right Top Corner */}

        <div className="flex pr-2 border-r border-gray-300 space-x-1 items-center">
          {/* Profile */}
          <button className="hover:bg-slate-200 rounded-lg">
            <Users2 className="text-slate-700 w-[2.4vw] h-[2.4vh]" />
          </button>

          {/* Notification Bell */}
          <button className="hover:bg-slate-200 rounded-lg">
            <Bell className="text-slate-700 w-[2.4vw] h-[2.4vh]" />
          </button>

          {/* Setting */}
          <button className=" hover:bg-slate-200 rounded-lg">
            <Settings className="text-slate-700 w-[2.4vw] h-[2.4vh]" />
          </button>
        </div>

        {/* 3rd Part of the Right Top Corner */}
        <div className="flex gap-4">
          {/* Name Tag */}
          <button className="flex items-center">
            <span className="pr-1.5 text-sm font-medium">Amrendra</span>
            <ChevronDown className="w-5 h-5" />
          </button>
          {/* Image Tag */}
          <button>
            <Image
              src="/user.jpg"
              alt="user image"
              width={96}
              height={96}
              className=" w-8 h-8 rounded-full border-slate-600 border"
            />
          </button>
          {/* Layout grid */}
          <button>
            <LayoutGrid className="overflow-hidden w-[90%] h-[90%] text-slate-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
