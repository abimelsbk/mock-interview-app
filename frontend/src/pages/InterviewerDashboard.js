import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function InterviewerDashboard() {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, bookingsRes] = await Promise.all([
          axios.get('/api/interviews/services', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get('/api/bookings/interviewer', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
        ]);
        setServices(servicesRes.data);
        setBookings(bookingsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Interviewer Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">My Services</h2>
          {services.map((service) => (
            <div key={service._id} className="bg-white p-6 rounded-lg shadow mb-4">
              <h3 className="text-lg font-semibold">{service.type}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-800 font-medium mt-2">
                {service.isFree ? 'Free' : `$${service.price}`}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white p-6 rounded-lg shadow mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">
                    {booking.interview.service.type} Interview
                  </h3>
                  <p className="text-gray-600">
                    with {booking.candidate.name}
                  </p>
                  <p className="text-gray-600">
                    {new Date(booking.dateTime).toLocaleString()}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === 'confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewerDashboard;