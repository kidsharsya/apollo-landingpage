'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300">
      <div className="max-w-6xl py-3 flex justify-between items-center mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Apollo Logo" width={120} height={120} className="mr-3" />
        </div>

        {/* Menu desktop (muncul di layar >= lg) */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <a href="#home" className="text-gray-700 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 px-3 py-2">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-700 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 px-3 py-2">
              Features
            </a>
          </li>
          <li>
            <a href="#howitworks" className="text-gray-700 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 px-3 py-2">
              How it works
            </a>
          </li>
          <li>
            <a href="#plans" className="text-gray-700 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 px-3 py-2">
              Plans
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-700 hover:border-b-2 hover:border-blue-500 hover:text-blue-500 px-3 py-2">
              FAQ
            </a>
          </li>
        </ul>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-blue-500 px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</button>
        </div>

        {/* Hamburger button (muncul di < lg) */}
        <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#features" className="block text-gray-700 hover:text-blue-500">
            Features
          </a>
          <a href="#howitworks" className="block text-gray-700 hover:text-blue-500">
            How it works
          </a>
          <a href="#plans" className="block text-gray-700 hover:text-blue-500">
            Plans
          </a>
          <a href="#faq" className="block text-gray-700 hover:text-blue-500">
            FAQ
          </a>
          <div className="pt-2 flex flex-col space-y-2">
            <button className="w-full text-blue-500 px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Sign In</button>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
