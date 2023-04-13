import React from 'react';

function Hero() {
  return (
    <section className="bg-indigo-800 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Our Company</h1>
        <p className="mt-4 text-2xl">
          Providing the best web design, development, and marketing services
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-gray-800 font-semibold rounded hover:bg-opacity-90">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
