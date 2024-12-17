"use client"; // Add this for client-side rendering if needed

import React, { useEffect, useState } from "react";

// InventoryPage Component
function InventoryPage() {
  // State to hold inventory data
  const [inventoryData, setInventoryData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch inventory data (Placeholder API call)
  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await fetch("/api/inventory");
        if (!response.ok) {
          throw new Error("Failed to fetch inventory data");
        }
        const data = await response.json();
        setInventoryData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInventoryData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Page</h1>

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading inventory...</p>}

      {/* Error State */}
      {error && (
        <p className="text-red-500">Error loading inventory: {error}</p>
      )}

      {/* Inventory List */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inventoryData.length > 0 ? (
            inventoryData.map((item) => (
              <div
                key={item.id}
                className="p-4 border rounded shadow-sm bg-white"
              >
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-700">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-700">
                  Price: ${item.price.toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No inventory items available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default InventoryPage;
