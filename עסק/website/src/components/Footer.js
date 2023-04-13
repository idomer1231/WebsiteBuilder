import React from 'react';

function Footer() {
  return (
    <footer className="bg-1F2937 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">YourCompany</h2>
        <nav className="flex justify-around">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
