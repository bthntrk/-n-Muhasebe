const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// @route   GET api/invoices
// @desc    Get all invoices
// @access  Public
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/invoices
// @desc    Create an invoice
// @access  Public
router.post('/', async (req, res) => {
  const { customer, amount } = req.body;
  try {
    const newInvoice = await Invoice.create({
      customer,
      amount,
    });

    res.json(newInvoice);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
