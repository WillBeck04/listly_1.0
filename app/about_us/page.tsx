import React from 'react';
import { motion } from 'framer-motion'; // For animations

function AboutUs() {
  return (
    <div className="min-h-screen bg-cyan-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full border border-gray-200"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h2>
        <p className="text-gray-600 mb-6">
          We are a team of dedicated individuals participating in the McGill hackathon. Our passion for innovation and technology brought us together to develop a project that makes a difference.
        </p>
        <p className="text-gray-600 mb-6">
          Our project focuses on facilitating inventory management and enhancing data analysis. We aim to provide an intuitive and efficient way for businesses to manage their inventory while gaining insightful analytics to make informed decisions. With our solution, inventory management becomes less of a chore and more of a strategic tool for business growth and optimization.
        </p>
        <div className="text-center mt-8">
          <button 
            className="bg-blue-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            type="button"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutUs;
