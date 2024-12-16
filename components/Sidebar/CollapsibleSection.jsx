import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

const CollapsibleSection = ({
  title,
  icon: IconComponent,
  links,
  active,
  onToggle,
  sectionName,
  onItemClick,
  selectedItem,
}) => {
  const isOpen = active[sectionName];

  const firstLinkTitle = links.length > 0 ? links[0].title : "";

  return (
    <div>
      {/* Trigger */}
      <button
        onClick={() => onToggle(sectionName)}
        className={`flex items-center justify-between w-full p-3 rounded-md hover:bg-blue-600 ${
          isOpen ? "bg-blue-800" : "bg-slate-800"
        } text-slate-50`}
      >
        <div>
          <Link
            href={`/inventory/inventory/${firstLinkTitle.toLowerCase()}`}
            className="flex items-center space-x-2"
          >
            <IconComponent className="w-4 h-4" />
            <span>{title}</span>
          </Link>
        </div>
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="pl mt-1 space-y-2">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              onClick={() => onItemClick(link.title)}
              className={`flex items-center justify-between pl-8 pr-4 py-2.5 mt-2 rounded-md hover:bg-blue-500 ${
                selectedItem === link.title ? "bg-blue-600" : ""
              }`}
            >
              <span className="text-sm">{link.title}</span>
              <PlusCircle className="w-4 h-4" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
