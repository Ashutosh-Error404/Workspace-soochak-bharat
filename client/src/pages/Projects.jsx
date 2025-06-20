import React from 'react';
import Sidebar from '../components/Sidebar';

const Projects = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Projects</h2>
        <p>List of projects will go here.</p>
      </div>
    </div>
  );
};

export default Projects;
