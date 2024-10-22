import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Bookings" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex space-x-2 mb-6">
              {['1:1 calls', 'Package/Subscriptions', 'Webinar', 'Digital Product'].map((type) => (
                <button key={type} className="px-4 py-2 border rounded-full text-sm">
                  {type}
                </button>
              ))}
            </div>
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded-md ${activeTab === 'upcoming' ? 'bg-gray-200' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeTab === 'completed' ? 'bg-gray-200' : ''}`}
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </button>
            </div>
            {activeTab === 'upcoming' && (
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share your page</h3>
                  <p className="text-gray-600">A new booking might just be around the corner, share your page today!</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Share page
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Bookings;