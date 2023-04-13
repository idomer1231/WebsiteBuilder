import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            YourCompany
          </Link>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Navigation */}
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex items-center space-x-4 text-1F2937 space-x-reverse`}
          >
            <li>
              <Link to="/" className="hover:text-1D4ED8 pl-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-1D4ED8">
                About
              </Link>
            </li>
            <li className="relative group">
              <Link to="/services" className="hover:text-1D4ED8">
                Services
              </Link>
              <ul className="absolute left-(-20) hidden mt-0 space-y-2 bg-white text-black p-2 rounded shadow-md group-hover:block">
                <li>
                  <Link to="/services/web-design" className="block px-2 py-1 hover:bg-gray-200">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link to="/services/web-development" className="block px-2 py-1 hover:bg-gray-200">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/seo-marketing" className="block px-2 py-1 hover:bg-gray-200">
                    SEO & Marketing
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="hover:text-1D4ED8">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
