const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, enum: ['mcq', 'coding'], required: true },
  category: { type: String, required: true },
  question: { type: String, required: true },
  options: [{ type: String }],
  correctAnswer: { type: String, required: true },
  difficulty: { type: String, default: 'medium' }
});

module.exports = mongoose.model('Question', questionSchema);
