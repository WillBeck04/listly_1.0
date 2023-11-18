"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

const UpdateInventory: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/inventory', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setInventoryItems(data.inventory);
      } else {
        setErrorMessage('Failed to fetch inventory.');
      }
    } catch (error) {
      console.error('Fetch Inventory Error:', error);
      setErrorMessage('An error occurred while fetching inventory.');
    }
  };

  const updateInventoryItem = async (item: InventoryItem, newQuantity: number) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:8080/api/inventory/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ quantity: newQuantity })
      });

      fetchInventory(); // Refresh inventory after update
    } catch (error) {
      console.error('Update Inventory Error:', error);
      setErrorMessage('An error occurred while updating inventory.');
    }
  };

  const handleAdd = (item: InventoryItem) => {
    updateInventoryItem(item, item.quantity + 1);
  };

  const handleRemove = (item: InventoryItem) => {
    if (item.quantity > 0) {
      updateInventoryItem(item, item.quantity - 1);
    }
  };

  const handleAddNewItem = async () => {
    if (!newItemName) {
      setErrorMessage('Please enter a name for the new item.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await fetch('http://localhost:8080/api/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name: newItemName })
      });

      setNewItemName('');
      fetchInventory(); // Refresh inventory after adding new item
    } catch (error) {
      console.error('Add New Inventory Item Error:', error);
      setErrorMessage('An error occurred while adding a new inventory item.');
    }
  };
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6 text-cyan-500">Update Inventory</h2>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="New Item Name"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddNewItem}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add New Item
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {inventoryItems.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md w-64">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-medium text-gray-800">{item.name}</span>
                            <span className="font-semibold text-gray-700">
                                {item.quantity > 0 ? `Qty: ${item.quantity}` : "Sold Out" }
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => handleRemove(item)} className="px-4 py-2 bg-red-500 text-white rounded-l-lg hover:bg-red-600 transition-colors duration-300 disabled:opacity-50" disabled={item.quantity === 0}>-</button>
                            <button onClick={() => handleAdd(item)} className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors duration-300">+</button>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/Home/restock_suggestion">
                <button className="mt-6 w-full flex justify-center items-center px-6 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
                    See Restock Suggestion
                </button>
            </Link>
        </div>
    );
}

export default UpdateInventory;
