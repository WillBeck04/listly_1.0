import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">About Us</h2>
        <p className="text-gray-600 mb-4">
          We are a team of dedicated individuals participating in the McGill hackathon. Our passion for innovation and technology brought us together to develop a project that makes a difference.
        </p>
        <p className="text-gray-600">
          Our project is focused on facilitating inventory management and enhancing the analysis of data. We aim to provide an intuitive and efficient way for businesses to keep track of their inventory while gaining insightful analytics to make informed decisions. With our solution, inventory management becomes less of a chore and more of a strategic tool for business growth and optimization.
        </p>
      </div>
    </div>
  )
}

export default AboutUs;
