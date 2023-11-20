'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  boughtQuantity: number;
  soldQuantity: number;
}

const AnalyticsPage: React.FC = () => {
  // State for storing inventory data
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);

  // Function to fetch inventory summary from the backend
  useEffect(() => {
    const fetchInventorySummary = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/inventory/summary', {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Log to check if the data structure is correct
          setInventoryData(data);
        } else {
          console.error('Failed to fetch inventory summary');
        }
      } catch (error) {
        console.error('Error fetching inventory summary:', error);
      }
    };
  
    fetchInventorySummary();
  }, []);
  

  // Calculate the liquidation value
  const calculateLiquidation = (boughtQuantity: number, soldQuantity: number, totalQuantity: number): string => {
    if (soldQuantity > 0) {
      return ((totalQuantity * 100) / soldQuantity).toFixed(2);
    }
    return 'N/A'; // Return 'N/A' if soldQuantity is 0
  };

  return (
    <div className="container mx-auto p-4">
       <div className="absolute top-4 left-4">
        <Link href="/Home">
          <button className="bg-cyan-500 text-white rounded-full px-4 py-2 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
            Home
          </button>
        </Link>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-6">Inventory Analytics</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Quantity Bought</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">Quantity Sold</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Liquidation</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">{item.boughtQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r">{item.soldQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{calculateLiquidation(item.boughtQuantity, item.soldQuantity, item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsPage;
