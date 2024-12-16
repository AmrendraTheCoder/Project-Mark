import HomeNavbar from "@/components/dashboard/HomeNavbar";
import React from "react";

function layout({ children }) {
  return (
    <div className="">
      <HomeNavbar />
      {children}
    </div>
  );
}

export default layout;
