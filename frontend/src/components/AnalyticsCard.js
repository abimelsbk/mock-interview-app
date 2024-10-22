import React from 'react';
import { fetchData } from '../api';

const AnalyticsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-3xl font-bold text-blue-500">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
};

export default AnalyticsCard;