const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Veritabanı dosyasının adı
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite Connected...');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

module.exports = { sequelize, connectDB };
