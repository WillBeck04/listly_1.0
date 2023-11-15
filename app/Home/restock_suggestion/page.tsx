import React from 'react';

// Sample inventory data
const initialInventoryItems = [
  { name: 'Tomatoes', quantity: 10 },
  { name: 'Salad', quantity: 0 },
  { name: 'Apples', quantity: 15 },
  { name: 'Bananas', quantity: 20 },
  { name: 'Oranges', quantity: 12 },
  { name: 'Lettuce', quantity: 7 },
  { name: 'Cucumbers', quantity: 9 },
  { name: 'Shampoo', quantity: 10 },
  { name: 'Soap', quantity: 8 },
  { name: 'Chicken', quantity: 15 },
  { name: 'Beef Steak', quantity: 20 },
  { name: 'Apple Juice', quantity: 0 },
  { name: 'Pasta', quantity: 7 },
  { name: 'Rice', quantity: 0 },
  // ... add as many other items as you need
];


function RestockSuggestion() {
  // Filter items with quantity of 5 or less for restocking
  const itemsToRestock = initialInventoryItems.filter(item => item.quantity <= 5);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Restock Suggestions</h2>
      {itemsToRestock.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {itemsToRestock.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg p-5">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 mb-4">Current Stock: <span className="text-red-500">{item.quantity}</span></p>
              <button className="mt-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Restock
              </button>
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