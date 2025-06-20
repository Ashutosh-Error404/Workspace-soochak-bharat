import React from 'react';
import Sidebar from '../components/Sidebar';

const Tenders = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Tenders</h2>
        <p>List of tenders will go here.</p>
      </div>
    </div>
  );
};

export default Tenders;
