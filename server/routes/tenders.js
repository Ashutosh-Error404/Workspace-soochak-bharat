// routes/tenders.js

const express = require('express');
const router = express.Router();
const Tender = require('../models/Tender');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

// GET all tenders
router.get('/', async (req, res) => {
  try {
    const tenders = await Tender.find().sort({ createdAt: -1 });
    res.json(tenders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST a new tender
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;
    const newTender = new Tender({
      title,
      description,
      dueDate,
      status,
      createdBy: req.user.id
    });
    await newTender.save();
    res.status(201).json(newTender);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
