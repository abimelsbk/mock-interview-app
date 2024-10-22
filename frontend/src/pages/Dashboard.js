import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BookingCard from '../components/BookingCard';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Dashboard" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h3 className="text-lg font-semibold mb-4">Welcome, Abimel!</h3>
            <div className="bg-pink-100 p-4 rounded-md mb-4">
              <p>The Referral Leaderboard is NOW LIVE!</p>
            </div>
            <h4 className="font-semibold mb-2">New Bookings</h4>
            <div className="space-y-2">
              <BookingCard title="Digital Product Sale" description="Cybersecurity Cheat sheet • Free" />
              <BookingCard title="1:1 Call" description="Career Guidance • ₹999" />
              <BookingCard title="Webinar" description="Introduction to Ethical Hacking • ₹499" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;