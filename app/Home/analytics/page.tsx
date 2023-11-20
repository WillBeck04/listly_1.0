'use client'
import React, { useEffect, useState } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  boughtQuantity: number;
  soldQuantity: number;
}

const AnalyticsPage: React.FC = () => {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const fetchInventorySummary = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/inventory/summary', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data: InventoryItem[] = await response.json();
        setInventoryData(data);
      } else {
        console.error('Failed to fetch inventory summary');
      }
    };

    fetchInventorySummary();
  }, []);

  const calculateLiquidation = (boughtQuantity: number, soldQuantity: number, totalQuantity: number) => {
    return soldQuantity > 0 ? ((totalQuantity * 100) / soldQuantity).toFixed(2) : 'N/A';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Inventory Analytics</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th>Item</th>
              <th>Quantity Bought</th>
              <th>Quantity Sold</th>
              <th>Liquidation</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.boughtQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.soldQuantity}</td>
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

