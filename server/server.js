// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./db'); // Sequelize instance
const authRoutes = require('./routes/auth');
const tenderRoutes = require('./routes/tenders');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tenders', tenderRoutes);

// Test DB connection and start server
const PORT = process.env.PORT || 5000;
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected.');
    return sequelize.sync(); // Create tables if not existing
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Unable to connect to DB:', err);
  });


