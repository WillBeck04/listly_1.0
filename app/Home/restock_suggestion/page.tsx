"use client"
import React, { useEffect, useState } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

const RestockSuggestion: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      // Assuming you have a token for authorization
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/inventory', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setInventoryItems(data);
      } else {
        console.error('Failed to fetch inventory.');
      }
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const itemsToRestock = inventoryItems.filter(item => item.quantity < 3);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Restock Suggestions</h2>
      {itemsToRestock.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {itemsToRestock.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg p-5">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-4">Current Stock: <span className="text-red-500">{item.quantity}</span></p>
              {/* Restock button functionality can be added here */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">All items are sufficiently stocked.</p>
      )}
    </div>
  );
}

export default RestockSuggestion;
