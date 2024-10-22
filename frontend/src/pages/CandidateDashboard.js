import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function CandidateDashboard() {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('/api/bookings/candidate', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setBookings(res.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Interview Bookings</h1>
      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking._id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  {booking.interview.service.type} Interview
                </h3>
                <p className="text-gray-600">
                  with {booking.interviewer.name}
                </p>
                <p className="text-gray-600">
                  {new Date(booking.dateTime).toLocaleString()}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  booking.status === 'confirmed'
                    ? 'bg-green-100 text-green-800'
                    : booking.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandidateDashboard;