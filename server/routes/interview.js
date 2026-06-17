const express = require('express');
const router = express.Router();
const Interview = require('../models/Interview');

router.post('/', async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    res.status(201).json(interview);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.userId) filter.userId = req.query.userId;
    const interviews = await Interview.find(filter).populate('userId');
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
