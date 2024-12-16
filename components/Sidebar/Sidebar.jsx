"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BaggageClaim,
  Home,
  ShoppingBag,
  ShoppingCart,
  BarChart4,
  Cable,
  ScrollText,
} from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";
import Subscription from "./Subscription";

const Sidebar = () => {
  const inventoryLinks = [
    { title: "Items", href: "/inventory//inventory/items" },
    { title: "Items Group", href: "/inventory//inventory/itemgroups" },
    { title: "Inventory Adjustments", href: "/inventory/inventory/adjustments" },
  ];

  const salesLinks = [
    { title: "Customers", href: "#" },
    { title: "Sales Orders", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Shipments", href: "#" },
    { title: "Invoices", href: "#" },
    { title: "Sales Receipts", href: "#" },
    { title: "Payment Received", href: "#" },
    { title: "Sales Returns", href: "#" },
    { title: "Credit Notes", href: "#" },
  ];

  const [active, setActive] = useState({
    inventory: false,
    sales: false,
    selectedItem: "",
    activeLink: "home", // Track static link active state
  });

  const handleToggle = (section) => {
    setActive((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
      ...(section === "inventory" && { sales: false }),
      ...(section === "sales" && { inventory: false }),
      // Reset activeLink when a collapsible section is toggled
      activeLink: "", // Reset active static link
    }));
  };

  const handleItemClick = (title) => {
    setActive((prevState) => ({
      ...prevState,
      selectedItem: title,
    }));
  };

  const handleStaticLinkClick = (linkName) => {
    setActive((prevState) => ({
      ...prevState,
      activeLink: linkName, // Set the clicked link as active
      // Collapse both inventory and sales when clicking a static link
      inventory: false,
      sales: false,
    }));
  };

  return (
    <div className="w-60 flex-grow overflow-y-auto min-h-screen bg-slate-800 text-slate-50 fixed flex flex-col justify-between">
      {/* Top Part */}
      <div>
        {/* Logo */}
        <Link
          href="/"
          className="bg-slate-900 border-b h-[6.6vh] border-slate-900 shadow-slate-400 flex space-x-2 items-center justify-center pt-3 pb-3 px-2"
        >
          <ShoppingCart />
          <span className="text-xl font-semibold">Inventory</span>
        </Link>
      </div>

      {/* Scrollable Navigation Links */}
      <div className="flex-1 px-3 py-6">
        <nav className="flex flex-col gap-3">
          {/* Home Static Link */}
          <Link
            href="/inventory/home/overview"
            className={`flex items-center p-3 space-x-2 rounded-md text-slate-50 ${
              active.activeLink === "home" ? "bg-blue-600" : "hover:bg-blue-500"
            }`}
            onClick={() => handleStaticLinkClick("home")}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          {/* Collapsible Sections */}
          <CollapsibleSection
            title="Inventory"
            icon={BaggageClaim}
            links={inventoryLinks}
            active={active}
            sectionName="inventory"
            onToggle={handleToggle}
            onItemClick={handleItemClick}
            selectedItem={active.selectedItem}
          />

          <CollapsibleSection
            title="Sales"
            icon={ShoppingCart}
            links={salesLinks}
            active={active}
            sectionName="sales"
            onToggle={handleToggle}
            onItemClick={handleItemClick}
            selectedItem={active.selectedItem}
          />

          {/* Additional Static Links */}
          <Link
            href="#"
            className={`flex items-center p-3 space-x-2 rounded-md hover:bg-blue-500 ${
              active.activeLink === "purchases" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleStaticLinkClick("purchases")}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </Link>

          <Link
            href="#"
            className={`flex items-center p-3 space-x-2 rounded-md hover:bg-blue-500 ${
              active.activeLink === "integrations" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleStaticLinkClick("integrations")}
          >
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>

          <Link
            href="#"
            className={`flex items-center p-3 space-x-2 rounded-md hover:bg-blue-500 ${
              active.activeLink === "reports" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleStaticLinkClick("reports")}
          >
            <BarChart4 className="w-4 h-4" />
            <span>Reports</span>
          </Link>

          <Link
            href="#"
            className={`flex items-center p-3 space-x-2 rounded-md hover:bg-blue-500 ${
              active.activeLink === "documents" ? "bg-blue-600" : ""
            }`}
            onClick={() => handleStaticLinkClick("documents")}
          >
            <ScrollText className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
      </div>

      {/* Bottom Part */}
      <div>
        <Subscription />
        <div className="bg-slate-950 flex space-x-2 justify-center pt-3 pb-3 px-2">
          <span>© 2024 Company</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
