import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

function SalesActivity() {
  const saleActivity = [
    {
      title: "To be Packed",
      number: 0,
      unit: "Qty",
      href: "#",
      color: "text-blue-500",
    },
    {
      title: "To be Shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-500",
    },
    {
      title: "To be Delivered",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-500",
    },
    {
      title: "To be Invoiced",
      number: 0,
      unit: "Qty",
      href: "#",
      color: "text-yellow-500",
    },
  ];

  const inventorySummary = [
    {
      number: 0,
      title: "Quantity in hand",
    },
    {
      number: 0,
      title: "Quantity to be received",
    },
  ];

  return (
    <div className="bg-blue-50 border-b border-slate-400 p-8 grid grid-cols-12 gap-4">
      {/* SALE ACTIVITY */}
      <div className="col-span-8 border-r-2 border-white">
        <h2 className="mb-6 text-2xl font-medium">Sales Activity</h2>
        <div className="pr-8 gap-4 grid grid-cols-4">
          {/* Card */}
          {saleActivity.map((item, i) => {
            return <SalesActivityCard item={item} key={i} customKey={i} />;
          })}
        </div>
      </div>

      {/* INVENTORY SUMMARY */}
      <div className="col-span-4">
        <h2 className="mb-6 text-2xl font-medium">Inventory Summary</h2>
        <div>
          <div className="">
            {inventorySummary.map((item, i) => {
              return <InventorySummaryCard item={item} key={i} customKey={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesActivity;
