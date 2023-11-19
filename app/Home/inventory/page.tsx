"use client"
// pages/items.tsx
import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:8080/items');
      const data: Item[] = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await fetch('http://localhost:8080/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newItemName }),
      });
      setNewItemName('');
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDeleteItem = async (itemId: number) => {
    try {
      await fetch(`http://localhost:8080/items/${itemId}`, {
        method: 'DELETE',
      });
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  const updateItemQuantity = async (itemId: number, newQuantity: number) => {
    try {
      await fetch(`http://localhost:8080/items/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      fetchItems();
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Item List</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="border border-gray-300 p-2 rounded-l-lg"
          placeholder="Enter item name"
        />
        <button
          onClick={handleAddItem}
          className="bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-4 rounded-r-lg"
        >
          Add Item
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <span className="text-lg">{item.name}</span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
