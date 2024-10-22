import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BookOpen, MessageSquare, Heart, BarChart2, Settings, Edit } from 'lucide-react';
import { fetchData } from '../api';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-md h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold">Mock Interview Platform</h1>
      </div>
      <nav className="mt-4">
        <SidebarLink icon={<Home />} label="Home" to="/dashboard" active={isActive('/dashboard')} />
        <SidebarLink icon={<Calendar />} label="Bookings" to="/bookings" active={isActive('/bookings')} />
        <SidebarLink icon={<MessageSquare />} label="Priority DM" to="/priority-dm" active={isActive('/priority-dm')} />
        <SidebarLink icon={<Heart />} label="Testimonials" to="/testimonials" active={isActive('/testimonials')} />
        <SidebarLink icon={<BookOpen />} label="Services" to="/services" active={isActive('/services')} />
        <SidebarLink icon={<BarChart2 />} label="Analytics" to="/analytics" active={isActive('/analytics')} />
        <SidebarLink icon={<Settings />} label="Settings" to="/settings" active={isActive('/settings')} />
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <Link to="/edit-profile" className="flex items-center p-2 bg-gray-100 rounded-lg">
          <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-semibold">Abimel S B kulumala</p>
            <p className="text-sm text-gray-600">Edit Profile</p>
          </div>
          <Edit className="w-4 h-4 ml-auto" />
        </Link>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label, to, active }) => (
  <Link
    to={to}
    className={`flex items-center px-4 py-2 text-gray-700 ${active ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </Link>
);

export default Sidebar;