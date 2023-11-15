"use client"
import Link from 'next/link';
import React, { useState } from 'react';

// Expanded initial inventory items
const initialInventoryItems = [
  { name: 'Tomatoes', quantity: 10 },
  { name: 'Salad', quantity: 8 },
  { name: 'Apples', quantity: 15 },
  { name: 'Bananas', quantity: 20 },
  { name: 'Oranges', quantity: 12 },
  { name: 'Lettuce', quantity: 7 },
  { name: 'Cucumbers', quantity: 9 },
  { name: 'Shampoo', quantity: 10 },
  { name: 'Soap', quantity: 8 },
  { name: 'Chicken', quantity: 15 },
  { name: 'Beef Steak', quantity: 20 },
  { name: 'Apple Juice', quantity: 12 },
  { name: 'Pasta', quantity: 7 },
  { name: 'Rice', quantity: 9 },
  // ... add as many other items as you need
];

const UpdateInventory = () => {
    const [inventoryItems, setInventoryItems] = useState(initialInventoryItems);
  
    const handleAdd = (index :number) => {
      const newItems = [...inventoryItems];
      newItems[index].quantity += 1;
      setInventoryItems(newItems);
    };
  
    const handleRemove = (index :number) => {
      const newItems = [...inventoryItems];
      if (newItems[index].quantity > 0) {
        newItems[index].quantity -= 1;
      }
      setInventoryItems(newItems);
    };
  
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Update Inventory</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {inventoryItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-64">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{item.name}</span>
                <span className="font-semibold">
                  {item.quantity > 0 ? `Qty: ${item.quantity}` : "Sold Out" }
                </span>
              </div>
              <div className="flex justify-center">
                <button onClick={() => handleRemove(index)} className="px-4 py-2 bg-red-500 text-white rounded-l-lg hover:bg-red-600 transition-colors duration-300 disabled:opacity-50" disabled={item.quantity === 0}>-</button>
                <button onClick={() => handleAdd(index)} className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors duration-300">+</button>
              </div>
              
            </div>
          ))}
        </div>
            <Link href="/Home/restock_suggestion">
                <button className="w-full flex justify-center items-center px-6 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                  See Restock Suggestion
                </button>
            </Link>
        
      </div>
    );
  }
  
  export default UpdateInventory;