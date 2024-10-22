import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Megaphone, Users, Mail, Share2 } from 'lucide-react';

const MarketingCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center mb-4">
      <div className="bg-indigo-100 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
    <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800">
      Learn More &rarr;
    </button>
  </div>
);

const Marketing = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Marketing" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold mb-6">Marketing Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MarketingCard
                title="Social Media Campaigns"
                description="Create and manage social media campaigns to reach a wider audience."
                icon={Megaphone}
              />
              <MarketingCard
                title="Referral Program"
                description="Set up a referral program to incentivize your clients to bring in new customers."
                icon={Users}
              />
              <MarketingCard
                title="Email Marketing"
                description="Design and send targeted email campaigns to engage with your audience."
                icon={Mail}
              />
              <MarketingCard
                title="Content Sharing"
                description="Share your expertise through blog posts, videos, and social media content."
                icon={Share2}
              />
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Marketing Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track the performance of your marketing efforts and gain insights to improve your strategies.
              </p>
              {/* Placeholder for analytics chart */}
              <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                Analytics Chart Placeholder
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Marketing;