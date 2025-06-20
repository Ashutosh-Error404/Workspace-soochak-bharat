// src/Dashboard.jsx
import React from 'react';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flex: 1 }}>
        <h1>Welcome to the Dashboard</h1>
        <p>Use the sidebar to navigate to Projects or Tenders.</p>
      </div>
    </div>
  );
};

export default Dashboard;
