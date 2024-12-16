"use client";
import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

function DashboardBanner() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "flex justify-between items-center py-12 px-16 bg-white gap-4 relative"
      }`}
    >
      {/* Icon */}
      <CreditCard className="w-20 h-20 ml-5 text-slate-500" />
      {/* Text */}
      <div className="flex flex-col w-1/2">
        <h2 className="font-semibold text-3xl pb-1.5">
          Start accepting online payments
        </h2>
        <p className="font-medium text-base text-slate-500">
          By integrating online payments, you’re not just keeping up with the
          times—you’re staying ahead of the competition. Whether you run a small
          local store or a growing e-commerce platform.
        </p>
      </div>
      {/* Button */}
      <button className="py-2 px-4 mx-24 uppercase bg-blue-500 rounded-lg text-white text-base hover:text-slate-200 hover:bg-slate-700 active:bg-slate-300 transition duration-200">
        Enable
      </button>
      {/* Close Button */}
      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-12 "
      >
        <X className="text-slate-600 hover:text-red-400 transition duration-100" />
      </button>
    </div>
  );
}

export default DashboardBanner;
