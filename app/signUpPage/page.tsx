'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Changed from 'next/navigation' to 'next/router'
import React, { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
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
            const response = await fetch('http://localhost:8080/api/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // Store the JWT token on successful signup
                localStorage.setItem('token', data.access_token);
                router.push('/Home'); // Redirect to the dashboard or another page
            } else {
                setErrorMessage(data.error || 'An error occurred during signup.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred during signup.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-cyan-100">
            <nav className="w-full text-center shadow-md py-4 bg-white">
                {/* Navigation Menu */}
                <ul className="inline-flex justify-center space-x-8">
                    <li>
                        <Link href="/contact">
                            <button className="text-gray-800 hover:text-cyan-500 font-medium transition duration-300 ease-in-out">
                                Contact
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Listly</h1>
                <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl p-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <button 
                                type="submit"
                                className="w-full flex justify-center items-center px-6 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-600 transition-colors duration-300 ease-in-out">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    {errorMessage && (
                        <div className="mt-4 text-red-600">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
