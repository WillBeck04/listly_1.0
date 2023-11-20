"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

const UpdateInventory: React.FC = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [displayedItems, setDisplayedItems] = useState<InventoryItem[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState<number | string>(1);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [updatedQuantities, setUpdatedQuantities] = useState<{ [itemId: number]: number }>({});

  useEffect(() => {
    fetchInventory();
  }, []);

  useEffect(() => {
    const filtered = searchTerm
      ? inventoryItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : inventoryItems;
    setDisplayedItems(filtered);
  }, [searchTerm, inventoryItems]);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/api/inventory', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setInventoryItems(data);
      setDisplayedItems(data);
    } catch (error) {
      console.error('Fetch Inventory Error:', error);
      setErrorMessage('Failed to fetch inventory.');
    }
  };

  const handleAddNewItem = async () => {
    if (!newItemName || (typeof newItemQuantity === 'string' && isNaN(Number(newItemQuantity))) || (typeof newItemQuantity === 'number' && newItemQuantity < 1)) {
      setErrorMessage('Please enter a valid name and quantity for the new item.');
      return;
    }

    const token = localStorage.getItem('token');
    await fetch('http://localhost:8080/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name: newItemName, quantity: Number(newItemQuantity) })
    });

    setNewItemName('');
    setNewItemQuantity(1);
    fetchInventory();
  };

  const handleUpdateItem = async (itemId: number, newQuantity: number) => {
    if (newQuantity < 0) {
      setErrorMessage('Quantity cannot be negative.');
      return;
    }

    const token = localStorage.getItem('token');
    await fetch(`http://localhost:8080/api/inventory/${itemId}`, {
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

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-between min-h-screen">
       {/* Home Button */}
       <div className="absolute top-4 left-4">
        <Link href="/Home">
          <button className="bg-cyan-500 text-white rounded-full px-4 py-2 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
            Home
          </button>
        </Link>
      </div>
      
      <div>
        <h1 className="text-3xl font-semibold text-center text-cyan-600 mb-6">Inventory Management</h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <div className="mb-6">
          <div className="relative">
            {/* ... (search input) */}
          </div>
          

          <div className="flex justify-center items-center mt-4">
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="New Item Name"
              className="border border-gray-300 p-2 rounded-l-lg"
            />
            <input
              type="text"
              value={newItemQuantity.toString()}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue)) {
                  setNewItemQuantity(inputValue);
                }
              }}
              placeholder="Quantity"
              className="border border-gray-300 p-2 mx-2"
            />
            <button
              onClick={handleAddNewItem}
              className="bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-3 rounded-r-lg"
            >
              Add
            </button>
          </div>
        </div>

        <ul className="space-y-3">
          {displayedItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
              <span className="font-medium">{item.name}</span>
              <div className="flex items-center">
                <input
                  type="text"
                  value={updatedQuantities[item.id] === undefined ? item.quantity.toString() : updatedQuantities[item.id].toString()}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d*$/.test(inputValue)) {
                      setUpdatedQuantities((prevState) => ({
                        ...prevState,
                        [item.id]: Number(inputValue)
                      }));
                    }
                  }}
                  className="border border-gray-300 p-2 rounded-l-lg"
                />
                <button
                  onClick={() => handleUpdateItem(item.id, updatedQuantities[item.id] === undefined ? item.quantity : updatedQuantities[item.id])}
                  className="bg-cyan-100 hover:bg-cyan-200 text-black font-bold py-2 px-3 rounded-r-lg"
                >
                  Update
                </button>
                <button
                  onClick={() => handleUpdateItem(item.id, (updatedQuantities[item.id] === undefined ? item.quantity : updatedQuantities[item.id]) - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 ml-10"
                >
                  -
                </button>
                <button
                  onClick={() => handleUpdateItem(item.id, (updatedQuantities[item.id] === undefined ? item.quantity : updatedQuantities[item.id]) + 1)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 ml-8"
                >
                  +
                </button>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="ml-3 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-8">
        <Link href="/Home/restock_suggestion">
          <button className="bg-cyan-500 text-white rounded-full px-8 py-2 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
            See Restock Suggestion
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateInventory;