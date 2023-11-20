"use client"
import React, { useState } from 'react';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for the middle paragraph

const AboutUs: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-h-screen bg-cyan-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full space-y-6">
        <div className="text-center">
          <FaRocket className="mx-auto text-8xl text-gray-800" /> {/* Increased icon size */}
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
        </div>
        <div className="flex items-center text-gray-600">
          <FaLightbulb className="mr-2 text-4xl" /> {/* Increased icon size */}
          <p>
            We are a team of dedicated individuals participating in the McGill hackathon. Our passion for innovation and technology brought us together to develop a project that makes a difference.
          </p>
        </div>
        <div className="flex items-center text-gray-600">
          <FaChartLine className="mr-2 text-6xl" /> {/* New icon and increased size */}
          <p>
            Our project is focused on facilitating inventory management and enhancing the analysis of data. We aim to provide an intuitive and efficient way for businesses to keep track of their inventory while gaining insightful analytics to make informed decisions.
          </p>
        </div>
        {showMore && (
          <div className="flex items-center text-gray-600">
            <FaUsers className="mr-2 text-6xl" /> {/* Increased icon size */}
            <p>
              Our team consists of skilled developers, designers, and business strategists, all committed to creating meaningful solutions. We believe in the power of technology to transform and improve the way businesses operate.
            </p>
          </div>
        )}
        <button
          onClick={toggleShowMore}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out mx-auto block"
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
