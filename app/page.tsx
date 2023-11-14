import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Main() {
  return (
    <div className="relative min-h-screen bg-cyan-400 overflow-hidden">
      {/* Top right button for Login */}
      <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
        <Link href="/loginPage">
          <button className="inline-block px-6 py-2 text-sm font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
            Login
          </button>
        </Link>
      </div>

      {/* Flex container for text and image */}
      <div className="flex flex-row justify-between items-start p-8">
        {/* Left side - Text content */}
        <div>
          <h1 className="text-3xl font-bold">Listly</h1>
          <div className="text-4xl font-bold mt-10">
            <p>Streamlining your stock,</p>
            <p>unlocking your success!</p>
          </div>
          <div className="text-2xl mt-1">
            <p>we optimize inventory to pave the way</p>
            <p>for your business to thrive.</p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-none mt-10 lg:mt-20">
          <Image
            src="/image1.png" // Replace with your image path
            alt="Descriptive Alt Text"
            width={600} // Adjust the width as needed
            height={300} // Adjust the height as needed
            objectFit="cover" // Adjust as needed to 'contain' if you don't want the image cropped
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
