const express = require('express');
const cors = require('cors');
const router = express.Router();
const Roomprice = require('../models/roomprice'); // Import your Mongoose model

// API route to fetch the price
router.get('/getPrice', async (req, res) => {
  const { category, type } = req.query;

  try {
    const priceData = await Roomprice.findOne({ category, type });

    if (!priceData) {
      return res.status(404).json({ error: 'Price not found' });
    }

    res.json({ price: priceData.price });
  } catch (error) {
    console.error('Error fetching price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
