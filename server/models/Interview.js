const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  score: { type: Number, default: 0 },
  feedback: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Interview', interviewSchema);
