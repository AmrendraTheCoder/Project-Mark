import React from "react";
import Header from "@/components/dashboard/Header.jsx";
import Sidebar from "@/components/Sidebar/Sidebar";

function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full ml-60 bg-bg_item_page min-h-screen">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default layout;
