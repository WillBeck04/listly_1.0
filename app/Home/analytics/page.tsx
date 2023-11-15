"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

// Static data for demonstration
const bestSellersData = [12, 19, 3, 5, 2, 3]; // Best Sellers sales data
const worstSellersData = [2, 3, 20, 5, 1, 4]; // Worst Sellers sales data

// Generate restock priority data (example logic)
const restockPriorityData = bestSellersData.map(sales => 20 - sales); // Just an example calculation

const data = {
  labels: ['Tomatoes', 'Salad', 'Apples', 'Bananas', 'Oranges', 'Lettuce'],
  datasets: [
    {
      label: 'Best Sellers',
      data: bestSellersData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Worst Sellers',
      data: worstSellersData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Restock Priority',
      data: restockPriorityData,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Analytics() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Analytics</h2>
      <div className="max-w-2xl mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Analytics;
