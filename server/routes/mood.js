const express = require('express');
const moodRoutes = express.Router();
const Mood = require('../models/Mood');

// CREATE operation
moodRoutes.route('/').post(async (req, res) => {
  try {
    const mood = new Mood(req.body);
    const savedMood = await mood.save();
    res.status(201).json(savedMood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ operation (get all moods)
moodRoutes.route('/').get(async (req, res) => {
  try {
    const moods = await Mood.find();
    res.json(moods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ operation (get mood by ID)
moodRoutes.route('/:id').get(async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.id);
    if (!mood) throw new Error('Mood not found');
    res.json(mood);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// UPDATE operation
moodRoutes.route('/:id').put(async (req, res) => {
  try {
    const mood = await Mood.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!mood) throw new Error('Mood not found');
    res.json(mood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE operation
moodRoutes.route('/:id').delete(async (req, res) => {
  try {
    const mood = await Mood.findByIdAndDelete(req.params.id);
    if (!mood) throw new Error('Mood not found');
    res.json({ message: 'Mood deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = moodRoutes;