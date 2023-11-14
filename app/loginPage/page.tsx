import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      {/* Navigation Menu */}
      <nav className="w-full text-center shadow-md py-4 bg-white">
        <ul className="inline-flex space-x-8">
          <li>
            <Link href="/about_us">
              <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out">
                About Us
              </button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 ease-in-out">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Image and Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        {/* Image Container */}
        
        
        {/* Welcome Text */}
        <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Listly</h1>

        {/* Sign Up/Login Form */}
        <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl p-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/Home">
                <button className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                  Sign Up
                </button>
              </Link>
              <Link href="/Home">
                <button className="w-full flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
