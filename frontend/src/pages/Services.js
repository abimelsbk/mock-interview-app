import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    { title: 'Community mentorship', duration: 120, price: 1200, views: 17, bookings: 3, earnings: 0, conversion: 17.65 },
    { title: 'Career guidance', duration: 45, price: 999, views: 0, bookings: 0, earnings: 0, conversion: 0 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Services" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                {['1:1 Call', 'Webinar', 'Priority DM', 'Digital Product', 'Package'].map((type) => (
                  <button key={type} className="px-4 py-2 border rounded-full text-sm">
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-md text-sm">+ Add New</button>
                <button className="px-4 py-2 border rounded-md text-sm">Templates</button>
              </div>
            </div>
            <div className="space-y-4">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Services;