const express = require('express');
const imageRouter = express.Router();
const Image = require('../models/Image');

// CREATE operation
imageRouter.post('/', async (req, res) => {
  try {
    const { image, moodName, date } = req.body;
    const newImage = new Image({ image, moodName, date });
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ operation (get all images)
imageRouter.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ operation (get image by ID)
imageRouter.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) throw new Error('Image not found');
    res.json(image);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// UPDATE operation
imageRouter.put('/:id', async (req, res) => {
  try {
    const { image, moodName, date } = req.body;
    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      { image, moodName, date },
      { new: true, runValidators: true }
    );
    if (!updatedImage) throw new Error('Image not found');
    res.json(updatedImage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE operation
imageRouter.delete('/:id', async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    if (!deletedImage) throw new Error('Image not found');
    res.json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

module.exports = imageRouter;

