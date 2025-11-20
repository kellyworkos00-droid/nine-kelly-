import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';


import DashboardCards from './components/DashboardCards';
import DashboardChart from './components/DashboardChart';

export default function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'background.default' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <DashboardCards />
        <DashboardChart />
        {/* Main dashboard content will go here */}
      </Box>
    </Box>
  );
}
