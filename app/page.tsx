"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Aboutus from './about_us/page';

function Main() {
  const [textIndex, setTextIndex] = useState(0);
  const [bulletVisible, setBulletVisible] = useState(Array(6).fill(false));
  const fullText = "Streamlining your stock, unlocking your success! We optimize inventory to pave the way for your business to thrive.";
  const bulletPoints = [
    "Automated Inventory Management",
    "Real-time Stock Updates",
    "Data-Driven Insights",
    "Easy Integration with Existing Systems",
    "User-Friendly Interface",
    "Secure Data Handling"
  ];
  const typingSpeed = 50; // Speed of typing effect in milliseconds

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((current) => {
        if (current < fullText.length) {
          return current + 1;
        } else {
          clearInterval(textInterval);
          startBulletPoints();
          return current;
        }
      });
    }, typingSpeed);

    return () => clearInterval(textInterval);
  }, []);

  const startBulletPoints = () => {
    bulletPoints.forEach((_, index) => {
      setTimeout(() => {
        setBulletVisible((visible) => {
          const newVisible = [...visible];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 1000); // Each bullet point appears 1 second after the previous
    });
  };

  return (
    <div className="relative min-h-screen bg-cyan-400 overflow-hidden">
      {/* Top right button for Login */}
      <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
        <Link href="/loginPage">
          <button className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition duration-300 ease-in-out transform hover:scale-105 bg-blue-500 rounded-full shadow hover:shadow-lg focus:outline-none">
            Login
          </button>
        </Link>
      </div>

      {/* Flex container for text and image */}
      <div className="flex flex-row justify-between items-start p-8">
        {/* Left side - Text content */}
        <div className="w-3/4 pr-4"> {/* Adjusted width and added padding */}
          <h1 className="text-5xl font-bold text-gray-800">Listly</h1>
          <div className="text-xl font-medium text-gray-600 mt-5 overflow-visible" style={{ height: 'auto' }}> {/* Adjusted overflow and height */}
            {fullText.substring(0, textIndex)}
            <span className="text-gray-600 opacity-50">|</span>
            {textIndex === fullText.length && (
              <ul className="list-disc pl-5 mt-4">
                {bulletPoints.map((point, index) => (
                  <li key={index} className={`text-gray-600 font-medium transition-all duration-500 ease-in-out ${bulletVisible[index] ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-none mt-10 lg:mt-20">
          <Image
            src="/image1.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={500}
            height={250}
            objectFit="contain"
          />
        </div>
      </div>
      <Aboutus />
    </div>
  );
}

export default Main;
