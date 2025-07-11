import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import AboutUs from '../pages/AboutUs';
import Booking from '../pages/Booking';

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />



          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
                    <Route path='/booking' element={<Booking />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
