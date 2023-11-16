"use client"
// Main.tsx
import React, { useState, useEffect, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutUs from './about_us/page'; // Make sure this is the correct path

const NavBar: FC = () => {
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <button className="font-bold text-xl text-gray-800">Listly</button>
        </Link>
        <div className="flex space-x-4">
          {['Home', 'Features', 'Pricing', 'About Us', 'Contact'].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`}>
              <button className="text-gray-600 hover:text-cyan-500 cursor-pointer text-sm uppercase">{item}</button>
            </Link>
          ))}
        </div>
        <div className="flex space-x-2"> {/* Controls the space between Login and Sign Up */}
          <Link href="/loginPage">
            <button className="text-gray-500 font-bold py-2 px-2 rounded">
              Login
            </button>
          </Link>
          <Link href="/loginPage">
            <button className="text-gray-500 font-bold py-2 px-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};



const Main: FC = () => {
  const [textIndex, setTextIndex] = useState<number>(0);
  const [bulletVisible, setBulletVisible] = useState<boolean[]>(new Array(6).fill(false));
  const fullText: string = "Streamlining your stock, unlocking your success! We optimize inventory to pave the way for your business to thrive.";
  const bulletPoints: string[] = [
    "Automated Inventory Management",
    "Real-time Stock Updates",
    "Data-Driven Insights",
    "Easy Integration with Existing Systems",
    "User-Friendly Interface",
    "Secure Data Handling"
  ];
  const typingSpeed: number = 20; // Speed of typing effect in milliseconds

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((current) => {
        if (current < fullText.length) {
          return current + 1;
        } else {
          clearInterval(textInterval);
          // Trigger visibility of bullet points
          setBulletVisible(new Array(6).fill(true));
          return current;
        }
      });
    }, typingSpeed);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero section */}
      <motion.div
        className="flex-grow bg-cyan-100 p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Content */}
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          {/* Left side */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
            <h1 className="text-3xl md:text-6xl p-2 text-gray-700 font-bold leading-tight">Streamline Your Inventory</h1>
            <p className="text-sm md:text-base text-gray-500 text-justify p-2">
              {fullText.substring(0, textIndex)}
              <span className="text-gray-600 opacity-50">|</span>
            </p>
            
            {/* Bullet Points */}
            <div className="mt-4">
              {bulletVisible.some(visible => visible) && (
                <ul className="list-disc pl-5 space-y-2">
                  {bulletPoints.map((point, index) => (
                    <li key={index} className={`text-gray-600 transition-opacity duration-500 ease-in-out ${bulletVisible[index] ? 'opacity-100' : 'opacity-0'}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-6">
              <Link href="/features">
                <button className="bg-transparent hover:bg-cyan-500 text-cyan-500 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded">
                  Explore Features
                </button>
              </Link>
            </div>
          </div>
          {/* Right side */}
          <div className="w-full lg:w-1/2 lg:py-6 text-center">
            <Image className="rounded-lg" src="/Image3.png" width={800} height={400} alt="Inventory" />
          </div>
          
        </div>
<<<<<<< HEAD
        {/* Right side - Image */}
        <div className="flex-none mt-10 lg:mt-20">
          <Image
            src="/image1.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={500}
            height={250}
            objectFit="contain"
          />
=======
      </motion.div>

      {/* About Us Section */}
      <AboutUs />

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">© 2023 Listly. All rights reserved.</p>
            <div className="text-gray-500">
              <Link href="/privacy">
                <button>Privacy Policy</button>
              </Link>
            </div>
          </div>
>>>>>>> b725d261a14768d6c47074c580eb737be951d04a
        </div>
      </footer>
    </div>
  );
}

export default Main;