import FixedHeader from "@/components/dashboard/FixedHeader";
import React from "react";

function Inventory() {

  async function getStaticProps() {
    try {
      const data = await fetchYourData();
      return { props: { data } }; // Pass data as props
    } catch (error) {
      return { notFound: true }; // Handle errors gracefully
    }
  }

  return (
    <div>
      <FixedHeader />
      <h2>Inventory Creation Options</h2>
    </div>
  );
}

export default Inventory;
