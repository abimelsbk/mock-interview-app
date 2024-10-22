import React from 'react';
import { BookOpen } from 'lucide-react';
import { fetchData } from '../api';

const BookingCard = ({ title, description }) => {
  return (
    <div className="flex items-center bg-white p-3 rounded-md shadow-sm">
      <div className="bg-gray-200 p-2 rounded-md mr-3">
        <BookOpen className="w-5 h-5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BookingCard;