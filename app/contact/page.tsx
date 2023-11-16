import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          Have any questions? We'd love to hear from you.
        </p>
        <div className="flex flex-col space-y-4">
          <p className="text-gray-600">
            <span className="font-semibold">William Beck:</span> <a href="mailto:william.beck@mail.mcgill.ca" className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out">william.beck@mail.mcgill.ca</a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Salomon Lavy:</span> <a href="mailto:salomon.lavyperez@mail.mcgill.ca" className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out">salomon.lavyperez@mail.mcgill.ca</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
