import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold mb-8 flex flex-col">Welcome to Listly:</h1>
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="space-x-4">
          <Link href="/inventory">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              See My Inventory
            </button>
          </Link>
          
          <Link href="/update_inventory">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Update Inventory
            </button>
          </Link>

          <Link href="/analytics">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Analytics
            </button>
          </Link>
          
          <Link href="/restock_suggestion">
            <button className="bg-blue-500 text-white rounded-full px-10 py-3 text-lg focus:outline-none hover:bg-blue-600 transition-colors duration-300 ease-in-out">
              Restock Suggestion
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

