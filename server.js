const express = require('express');
const { connectDB, sequelize } = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Sync Models
const Invoice = require('./models/Invoice');
const Account = require('./models/Account');
const Stock = require('./models/Stock'); // Stok modelini ekleyin
sequelize.sync();

app.use(bodyParser.json());
app.use(cors());

// Define Routes
app.use('/api/invoices', require('./routes/invoices'));
app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/stocks', require('./routes/stocks')); // Stok rotasını ekleyin

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
