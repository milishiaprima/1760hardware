'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const doorTypes = [
    { name: 'Wooden Doors', href: '/products/wooden-steel-doors' },
    { name: 'Interior Doors', href: '/products/interior-doors' },
    { name: 'Exterior Doors', href: '/products/exterior-doors' },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-linear-to-r from-orange-500 to-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-lg shadow-lg group-hover:shadow-orange-500/50 group-hover:shadow-lg transition-all duration-300">
              ND
            </div>
            <span className="hidden sm:inline font-bold text-white text-lg group-hover:text-orange-400 transition-colors">
            Nyumbani Doors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              Home
            </Link>
            
            {/* Doors Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-200 hover:text-orange-400 transition-colors font-medium text-sm"
              >
                Doors
                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-gradient-to-b from-red-600 to-red-700 shadow-2xl rounded-lg py-3 z-50 border border-red-400/30"
                >
                  {doorTypes.map((door, index) => (
                    <Link
                      key={index}
                      href={door.href}
                      className="block px-5 py-2.5 text-gray-200 hover:bg-red-500/20 hover:text-orange-400 transition-all duration-200 text-sm font-medium border-l-3 border-transparent hover:border-red-400"
                    >
                      {door.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/services"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              Services
            </Link>
            
            <Link
              href="/reviews"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              Reviews
            </Link>
            
            <Link
              href="/contact-us"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              Contact Us
            </Link>
            
            <Link
              href="/admin/login"
              className="bg-linear-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-semibold text-sm"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-700 rounded-lg text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-red-500/30 pt-4 flex flex-col gap-4 bg-red-800/50 rounded-lg px-4 py-4">
            <Link
              href="/"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left flex items-center justify-between text-gray-200 hover:text-orange-400 transition-colors font-medium"
              >
                Doors
                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="mt-3 ml-4 border-l-2 border-red-400 flex flex-col gap-2">
                  {doorTypes.map((door, index) => (
                    <Link
                      key={index}
                      href={door.href}
                      className="text-left py-1.5 text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {door.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/services"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            
            <Link
              href="/reviews"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            
            <Link
              href="/contact-us"
              className="text-gray-200 hover:text-orange-400 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            
            <Link
              href="/admin/login"
              className="bg-linear-to-r from-orange-500 to-red-600 text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 inline-block font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

