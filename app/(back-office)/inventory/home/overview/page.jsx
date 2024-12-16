import DashboardBanner from "@/components/dashboard/DashboardBanner";
import SalesActivity from "@/components/dashboard/SalesActivity";
import React from "react";

function Dashboard() {
  return (
    <div>
      <DashboardBanner />
      <SalesActivity />
      {/* <h2>Dashboard</h2> */}
    </div>
  );
}

export default Dashboard;
