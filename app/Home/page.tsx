import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full text-center">
        <h1 className="bg-blue-500 rounded-full text-white text-3xl font-bold mb-8 flex flex-col">Welcome to Listly:</h1>
      </div>
      <div className="mb-8">
          <Image
            src="/image.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={900} // Replace with your image's width
            height={600} // Replace with your image's height
            //className="rounded-full" // Optional: if you want a rounded image
          />
        </div>
      
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="space-x-4">
          <Link href="/Home/inventory">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              See My Inventory
            </button>
          </Link>
          
          <Link href="/Home/update_inventory">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Update Inventory
            </button>
          </Link>

          <Link href="/Home/analytics">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Analytics
            </button>
          </Link>
          
          <Link href="Home/restock_suggestion">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Restock Suggestion
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

