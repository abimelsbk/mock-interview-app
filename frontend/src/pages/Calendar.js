import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="border p-2 h-24">
          <span className="font-bold">{i}</span>
          {/* You can add events or bookings here */}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header title="Calendar" />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-semibold flex items-center">
                  <CalendarIcon className="w-6 h-6 mr-2" />
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-semibold">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {renderCalendarDays()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calendar;