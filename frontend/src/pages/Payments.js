import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { DollarSign, CreditCard, Download, Users } from 'lucide-react';

const PaymentCard = ({ amount, date, status }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
    <div>
      <p className="font-semibold">${amount}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <div>
      <span className={`px-2 py-1 rounded-full text-xs ${
        status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    </div>
  </div>
);

const Payments = () => {
  const [activeTab, setActiveTab] = useState('received');

  const paymentHistory = [
    { amount: 150, date: '2023-05-15', status: 'Paid' },
    { amount: 200, date: '2023-05-10', status: 'Pending' },
    { amount: 100, date: '2023-05-05', status: 'Paid' },
    { amount: 175, date: '2023-04-30', status: 'Paid' },
    { amount: 125, date: '2023-04-25', status: 'Pending' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Payments" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Payment Overview</h2>
              <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Earnings</p>
                    <p className="text-2xl font-bold">$1,250</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">+15% from last month</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pending Payments</p>
                    <p className="text-2xl font-bold">$325</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">3 pending transactions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Clients</p>
                    <p className="text-2xl font-bold">28</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">+5 new clients this month</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex border-b">
                <button
                  className={`flex-1 py-4 px-6 text-center ${
                    activeTab === 'received' ? 'bg-gray-100 font-semibold' : ''
                  }`}
                  onClick={() => setActiveTab('received')}
                >
                  Payments Received
                </button>
                <button
                  className={`flex-1 py-4 px-6 text-center ${
                    activeTab === 'sent' ? 'bg-gray-100 font-semibold' : ''
                  }`}
                  onClick={() => setActiveTab('sent')}
                >
                  Payments Sent
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                  {paymentHistory.map((payment, index) => (
                    <PaymentCard key={index} {...payment} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payments;