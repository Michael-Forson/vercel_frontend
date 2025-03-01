"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ProductsDropdown from './ProductDropdown';
import SolutionDropdown from './SolutionDropdown';
import ResourceDropdown from './ResourceDropdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed w-full top-0 z-50 bg-black  shadow-[0_0_0_1px_rgba(255,255,255,0.14)]  ">
             
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo + Navigation */}
          <div className="flex items-center space-x-8"     >
            <Link href="/" className="flex items-center">
              <svg
                viewBox="0 0 76 65"
                fill="none"
                className="h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="ml-2 text-white font-semibold text-lg">Vercel</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <ProductsDropdown 
                isOpen={openDropdown === 'products'}
                onOpen={() => setOpenDropdown('products')}
                onClose={() => setOpenDropdown(null)}
              />
                <SolutionDropdown   isOpen={openDropdown === 'solutions'}
                onOpen={() => setOpenDropdown('solutions')}
                onClose={() => setOpenDropdown(null)}/>
                <ResourceDropdown isOpen={openDropdown === 'resources'}
                onOpen={() => setOpenDropdown('resources')}
                onClose={() => setOpenDropdown(null)}/>
              {/* Add Solutions and Resources dropdowns similarly */}
              <button className="flex items-center text-gray-300 hover:text-white  py-2 px-3 hover:bg-[#1b1b1b] rounded-2xl transition-all">
              Enterprise</button>
              <button className="flex items-center text-gray-300 hover:text-white  py-2 px-3 hover:bg-[#1b1b1b] rounded-2xl transition-all">
              Docs</button>
              <button className="flex items-center text-gray-300 hover:text-white  py-2 px-3 hover:bg-[#1b1b1b] rounded-2xl transition-all">
              Pricing</button>
              
            </div>
          </div>

          {/* Right side - CTA buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[rgb(237,237,237)] bg-[rgb(10,10,10)] shadow-[0_0_0_1px_rgba(255,255,255,0.14)]  hover:bg-[#1b1b1b] hover:text-white px-4 py-2 text-sm font-semibold rounded-md"
            >
              Log In
            </Link>
            <Link
              href="/login"
              className="text-[rgb(237,237,237)] bg-[rgb(10,10,10)] shadow-[0_0_0_1px_rgba(255,255,255,0.14)]  hover:bg-[#1b1b1b] hover:text-white px-4 py-2 text-sm font-semibold rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/signup"
              className=" text-black  bg-white px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <div className="text-gray-300 font-medium">{item.name}</div>
                    <div className="ml-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-400 hover:text-white py-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="block text-gray-300 hover:text-white py-2"
                  >
                    {item.name}
                  </Link>
                )}
                <div className="border-t border-gray-800 my-2"></div>
              </div>
            ))}
            <div className="pt-4 space-y-4">
              <Link
                href="/login"
                className="block text-gray-300 hover:text-white py-2"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-white px-6 py-2 rounded-full text-sm font-medium text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}