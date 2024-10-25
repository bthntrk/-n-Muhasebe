const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

// @route   GET api/accounts
// @desc    Get all accounts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/accounts
// @desc    Create an account
// @access  Public
router.post('/', async (req, res) => {
  const { name, balance } = req.body;
  try {
    const newAccount = await Account.create({
      name,
      balance,
    });

    res.json(newAccount);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/accounts/:id
// @desc    Update an account
// @access  Public
router.put('/:id', async (req, res) => {
  const { name, balance } = req.body;
  try {
    let account = await Account.findByPk(req.params.id);
    if (!account) {
      return res.status(404).json({ msg: 'Account not found' });
    }

    account.name = name;
    account.balance = balance;
    await account.save();

    res.json(account);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/accounts/:id
// @desc    Delete an account
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let account = await Account.findByPk(req.params.id);
    if (!account) {
      return res.status(404).json({ msg: 'Account not found' });
    }

    await account.destroy();
    res.json({ msg: 'Account removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
