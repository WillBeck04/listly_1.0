import Link from 'next/link';
import React, { FC } from 'react';

const Home: FC = () => {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Navigation Menu */}
      <nav className="w-full py-4 bg-white shadow-md">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/Home/inventory"><button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">Inventory</button></Link></li>
          <li><Link href="/Home/analytics"><button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">Analytics</button></Link></li>
          <li><Link href="/Home/reports"><button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">Reports</button></Link></li>
          <li><Link href="/Home/settings"><button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">Settings</button></Link></li>
          <li><Link href="/Home/support"><button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">Support</button></Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="text-center mt-8 mb-16">
        <h1 className="text-cyan-500 text-4xl font-bold mb-6">Welcome to Listly</h1>
        <p className="text-lg text-gray-700 mb-8">
          Streamlining your inventory management with smart insights and automation.
        </p>

        {/* Interactive Buttons */}
        <div className="space-x-4 mb-8">
          <Link href="/Home/inventory">
            <button className="bg-cyan-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
              Manage Inventory
            </button>
          </Link>
          <Link href="/Home/analytics">
            <button className="bg-cyan-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
              Analytics
            </button>
          </Link>
          <Link href="/Home/restock_suggestion">
            <button className="bg-cyan-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
              Restock Suggestion
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Feature Blocks */}
      <div className="flex flex-wrap justify-center space-y-6 max-w-4xl mx-auto p-4">
        {/* Feature Card: Real-time Tracking */}
        <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-1/3 m-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Tracking</h3>
          <p className="text-gray-600">
            Keep track of your inventory in real time, monitor stock levels, and receive instant alerts.
          </p>
        </div>

        {/* Feature Card: Supplier Management */}
        <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-1/3 m-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Supplier Management</h3>
          <p className="text-gray-600">
            Efficiently manage supplier relationships and automate communication for restocking.
          </p>
        </div>

        {/* Feature Card: Customizable Reports */}
        <div className="bg-white rounded-lg p-6 shadow-lg w-full md:w-1/3 m-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Customizable Reports</h3>
          <p className="text-gray-600">
            Generate detailed, customizable reports to gain insights and make informed decisions.
          </p>
        </div>

        {/* More Feature Cards can be added similarly */}
      </div>
    </main>
  );
}

export default Home;
