const express = require('express');
const router = express.Router();
const Stock = require('../models/Stock');

// @route   GET api/stocks
// @desc    Get all stocks
// @access  Public
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.findAll();
    res.json(stocks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/stocks
// @desc    Create a stock
// @access  Public
router.post('/', async (req, res) => {
  const { product, quantity, price } = req.body;
  try {
    const newStock = await Stock.create({
      product,
      quantity,
      price,
    });

    res.json(newStock);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/stocks/:id
// @desc    Update a stock
// @access  Public
router.put('/:id', async (req, res) => {
  const { product, quantity, price } = req.body;
  try {
    let stock = await Stock.findByPk(req.params.id);
    if (!stock) {
      return res.status(404).json({ msg: 'Stock not found' });
    }

    stock.product = product;
    stock.quantity = quantity;
    stock.price = price;
    await stock.save();

    res.json(stock);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/stocks/:id
// @desc    Delete a stock
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let stock = await Stock.findByPk(req.params.id);
    if (!stock) {
      return res.status(404).json({ msg: 'Stock not found' });
    }

    await stock.destroy();
    res.json({ msg: 'Stock removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
