import React from "react";
import Link from "next/link";

function OptionCard({ optionData }) {
  const { title, description, icon, link, linkTitle, enabled } = optionData;

  return (
    <div>
      <div className="px-4 py-8 gap-3 rounded border border-slate-200 shadow-md bg-white flex flex-col justify-center items-center">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className="w-36 h-36">
          {/* <Shirt className="w-36 h-36" /> */}
          {icon}
        </div>
        <p className="font-medium text-sm text-slate-900">{description}</p>

        {enabled ? (
          <button className="flex justify-center items-center px-3 py-2 gap-1 font-semibold bg-blue-500 rounded-md text-sm text-white">
            Enable
          </button>
        ) : (
          <Link
            href={link}
            className="flex justify-center items-center px-3 py-2 gap-1 font-semibold bg-blue-500 rounded-md text-sm text-white"
          >
            {linkTitle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default OptionCard;
