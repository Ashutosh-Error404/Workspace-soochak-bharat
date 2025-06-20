import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Tenders = () => {
  const [tenders, setTenders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/tenders')
      .then((res) => res.json())
      .then((data) => setTenders(data))
      .catch(() => setError('Failed to load tenders.'));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Tenders</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {tenders.length === 0 ? (
          <p>No tenders found.</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '1px solid #ccc' }}>Title</th>
                <th style={{ borderBottom: '1px solid #ccc' }}>Description</th>
                <th style={{ borderBottom: '1px solid #ccc' }}>Due Date</th>
                <th style={{ borderBottom: '1px solid #ccc' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr key={tender._id}>
                  <td>{tender.title}</td>
                  <td>{tender.description}</td>
                  <td>{tender.dueDate ? tender.dueDate.split('T')[0] : 'N/A'}</td>
                  <td>{tender.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Tenders;
