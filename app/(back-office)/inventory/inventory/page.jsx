"use client";

import FixedHeader from "@/components/dashboard/FixedHeader";
import React, { useEffect, useState } from "react";

function Inventory() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <FixedHeader />
      <h2>Inventory Creation Options</h2>
      <div>
        <p>Data Fetched: {data ? JSON.stringify(data) : "Loading..."}</p>
      </div>
    </div>
  );
}

export default Inventory;
