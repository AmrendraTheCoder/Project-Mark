import FixedHeader from "@/components/dashboard/FixedHeader";
import React from "react";

function Inventory({ data }) {
  return (
    <div>
      <FixedHeader />
      <h2>Inventory Creation Options</h2>
      <p>Data fetched: {data ? JSON.stringify(data) : "No data available"}</p>
    </div>
  );
}

// Move getStaticProps outside the component
export async function getStaticProps() {
  try {
    // Simulate data fetching logic
    const response = await fetch("https://api.example.com/data"); // Replace with your API endpoint
    const data = await response.json();

    return {
      props: { data }, // Pass the fetched data to the component
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true, // Show a 404 page if data fetch fails
    };
  }
}

export default Inventory;
