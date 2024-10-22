import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Services from './pages/Services';
import Analytics from './pages/Analytics';
import Calendar from './pages/Calendar';
import Marketing from './pages/Marketing';
import Payments from './pages/Payments';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/services" element={<Services />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;