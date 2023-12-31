import './App.css';
import React from 'react';
import SlideNavbar from './component/signup.js';
import LandlordDashboard from './component/LandlordDashboard.js';
import TenantDashboard from './component/TenantDashboard.js';
import LayoutWithHeader from './component/LayoutWithHeader.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {jwtDecode} from "jwt-decode";;

function App() {
  const token = localStorage.getItem('accessToken');

  let role = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role; // Adjust this depending on how the role is stored in your token
    } catch (error) {
      console.error('Failed to decode token:', error);
    }
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SlideNavbar />} />
        {role === 'ROLE_LANDLORD' && (
          <Route path="/dashboard" element={<LayoutWithHeader><LandlordDashboard /></LayoutWithHeader>} />
        )}
        {role === 'ROLE_TENANT' && (
          <Route path="/dashboard" element={<LayoutWithHeader><TenantDashboard /></LayoutWithHeader>} />
        )}
        {!role && <Route path="/dashboard" element={<Navigate to="/" />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
