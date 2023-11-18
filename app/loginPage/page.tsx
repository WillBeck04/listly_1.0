'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Corrected import for useRouter
import React, { useState } from 'react';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Store the JWT token in local storage
                localStorage.setItem('token', data.access_token);
                router.push('/Home'); // Modify as needed for your application
            } else {
                setErrorMessage(data.error || 'Invalid login credentials.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred during login.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-cyan-100">
            {/* Navigation Menu */}
            <nav className="w-full text-center shadow-md py-4 bg-white">
                <ul className="inline-flex justify-center space-x-8">
                    <li>
                        <Link href="/contact">
                            <button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">
                                Contact
                            </button>
                        </Link>
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
            </nav>

            {/* Image and Content */}
            <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                {/* Image Container */}
                {/* Add an image or additional content here if needed */}
                
                {/* Welcome Text */}
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Listly</h1>

                {/* Login Form */}
                <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl p-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
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
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center px-6 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
                                Login
                            </button>
                        </div>
                    </form>
                    {/* Error Message */}
                    {errorMessage && <div className="mt-4 text-red-600">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
}
