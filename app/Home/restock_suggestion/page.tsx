"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col justify-between">
       <div className="absolute top-4 left-4">
        <Link href="/Home">
          <button className="bg-cyan-500 text-white rounded-full px-4 py-2 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
            Home
          </button>
        </Link>
      </div>
      <div>
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
      <div className="text-center mt-8">
        <Link href="/Home/inventory">
          <button className="bg-cyan-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
            Manage Inventory
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RestockSuggestion;