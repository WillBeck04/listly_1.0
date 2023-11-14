import React from 'react';

const inventoryItems = [
  { name: 'Tomatoes', quantity: 10 },
  { name: 'Salad', quantity: 8 },
  { name: 'Apples', quantity: 15 },
  { name: 'Bananas', quantity: 20 },
  { name: 'Oranges', quantity: 12 },
  { name: 'Lettuce', quantity: 7 },
  { name: 'Cucumbers', quantity: 9 },
  { name: 'Carrots', quantity: 14 },
  { name: 'Potatoes', quantity: 16 },
  { name: 'Onions', quantity: 11 },
  { name: 'Garlic', quantity: 5 },
  { name: 'Grapes', quantity: 17 },
  { name: 'Strawberries', quantity: 6 },
  { name: 'Cherries', quantity: 13 },
  { name: 'Lemons', quantity: 19 },
  { name: 'Limes', quantity: 4 },
  { name: 'Peaches', quantity: 18 },
  { name: 'Mangos', quantity: 3 },
  { name: 'Blueberries', quantity: 10 },
  { name: 'Avocados', quantity: 8 },
  { name: 'Bell Peppers', quantity: 7 },
];

const UpdateInventory = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Inventory</h2>
      <ul>
        {inventoryItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{`${item.name} - Quantity: ${item.quantity}`}</span>
            <div>
              {/* Static buttons without event handlers */}
              <button className="px-2 py-1 bg-green-500 text-white rounded-lg mx-1">+</button>
              <button className="px-2 py-1 bg-red-500 text-white rounded-lg mx-1">-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateInventory;
