import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white border-b border-gray-700">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">HackerRank</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </Link>
          <nav className="flex space-x-6">
            <Link 
              to="/"
              className="px-4 py-2 text-green-400 border-b-2 border-green-400 font-medium"
            >
              Prepare
            </Link>
            <span className="px-4 py-2 text-gray-300 hover:text-white cursor-pointer">Certify</span>
            <span className="px-4 py-2 text-gray-300 hover:text-white cursor-pointer">Compete</span>
            <span className="px-4 py-2 text-gray-300 hover:text-white cursor-pointer">Apply</span>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <svg 
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">U</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;