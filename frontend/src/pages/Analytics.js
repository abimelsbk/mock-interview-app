import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Analytics = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Analytics" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
            {/* Add your analytics content here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;