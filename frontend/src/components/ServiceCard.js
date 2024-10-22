import React from 'react';
import { fetchData } from '../api';

const ServiceCard = ({ title, duration, price, views, bookings, earnings, conversion }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-gray-600">Public</span>
      </div>
      <p className="text-gray-600 mb-4">{duration} mins • ₹{price}</p>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="font-semibold">{views}</p>
          <p className="text-sm text-gray-600">Views</p>
        </div>
        <div>
          <p className="font-semibold">{bookings}</p>
          <p className="text-sm text-gray-600">Bookings</p>
        </div>
        <div>
          <p className="font-semibold">₹{earnings}</p>
          <p className="text-sm text-gray-600">Earnings</p>
        </div>
        <div>
          <p className="font-semibold">{conversion}%</p>
          <p className="text-sm text-gray-600">Conversion</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;