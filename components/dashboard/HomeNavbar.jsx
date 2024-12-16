"use client";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HomeNavbar() {
  const pathName = usePathname();
  // console.log(pathName)

  const navLinks = [
    {
      title: "Dashboard",
      href: "/inventory/home/overview",
    },
    {
      title: "Getting Started",
      href: "/inventory/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/inventory/home/updates",
    },
    {
      title: "Announcements",
      href: "/inventory/home/announcements",
    },
  ];

  return (
    <div className='h-36 header-bg bg-white px-5 pt-8 border-b-2 border-slate-600"'>
      <div className="flex space-x-3 justify-center items-center">
        <div className="flex w-12 h-12 justify-center items-center rounded-lg bg-white border border-slate-200">
          <Building2 className="text-slate-500" />
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <p className="font-semibold">Hello, Amrendra Vikram Singh</p>
            <span className="text-sm text-slate-700 pt-0">Lucknow</span>
          </div>
          <div className="flex flex-col text-right">
            <p className="text-xs">Mark Industry India Helpline: 7054107107</p>
            <span className="text-xs">Mon - Fri • 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>
      <nav className="sticky mt-[2.34vh] flex space-x-4">
        {navLinks.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathName === item.href
                  ? "py-2 border-b-2 border-blue-600"
                  : "py-2"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default HomeNavbar;
