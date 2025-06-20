const mongoose = require('mongoose');

const tenderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dueDate: Date,
  status: {
    type: String,
    enum: ['Open', 'Closed'],
    default: 'Open'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tender', tenderSchema);
