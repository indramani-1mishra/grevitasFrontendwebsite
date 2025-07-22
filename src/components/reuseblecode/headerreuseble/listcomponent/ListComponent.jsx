import React, { useState } from 'react';

export default function ListComponent() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ul className="flex gap-8 text-gray-800 font-semibold text-sm uppercase tracking-wide relative text-white">
      <li className="cursor-pointer hover:text-blue-600 transition duration-300">
        Home
      </li>
      <li className="cursor-pointer hover:text-blue-600 transition duration-300">
        Features
      </li>

      {/* Products with dropdown */}
      <li
        className="relative cursor-pointer hover:text-blue-600 transition duration-300"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        Products
        {showDropdown && (
          <ul className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md z-50 ">
            <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">T-Shirts</li>
            <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Hoodies</li>
            <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Accessories</li>
          </ul>
        )}
      </li>

      <li className="cursor-pointer hover:text-blue-600 transition duration-300  ">
        Categories
      </li>
      <li className="cursor-pointer hover:text-blue-600 transition duration-300">
        Review
      </li>
      <li className="cursor-pointer hover:text-blue-600 transition duration-300">
        Blog
      </li>
    </ul>
  );
}
