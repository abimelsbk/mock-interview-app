import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const EditProfile = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Edit Profile" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold mb-4">Edit Your Profile</h2>
            {/* Add your profile editing form here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditProfile;