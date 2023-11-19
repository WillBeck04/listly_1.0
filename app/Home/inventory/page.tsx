'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
      setErrorMessage('Failed to fetch inventory.');
    }
  };

  const handleAddNewItem = async () => {
    if (!newItemName) {
      setErrorMessage('Please enter a name for the new item.');
      return;
    }

    const token = localStorage.getItem('token');
    await fetch('http://localhost:8080/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name: newItemName, quantity: 1 })
    });

    setNewItemName('');
    fetchInventory();
  };

  const handleUpdateItem = async (item: InventoryItem, newQuantity: number) => {
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:8080/api/inventory/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ quantity: newQuantity })
    });

    fetchInventory();
  };

  const handleDeleteItem = async (itemId: number) => {
    const token = localStorage.getItem('token');
    await fetch(`http://localhost:8080/api/inventory/${itemId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    fetchInventory();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Manage Your Inventory</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="New Item Name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
        <button
          onClick={handleAddNewItem}
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Item
        </button>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <ul>
        {inventoryItems.map(item => (
          <li key={item.id} className="flex justify-between items-center p-3 bg-white rounded shadow mb-2">
            <span>{item.name} (Qty: {item.quantity})</span>
            <div>
              <button
                onClick={() => handleUpdateItem(item, item.quantity + 1)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-l"
              >
                +
              </button>
              <button
                onClick={() => handleUpdateItem(item, item.quantity > 0 ? item.quantity - 1 : 0)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-r"
              >
                -
              </button>
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="ml-2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateInventory;
