import React from 'react';
import { Share2, Bell, MessageSquare } from 'lucide-react';
import { fetchData } from '../api';

const Header = ({ title }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <MessageSquare className="h-6 w-6" />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700 transition duration-150 ease-in-out">
              <Share2 className="w-4 h-4 mr-2" />
              <span>Get More Bookings</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;