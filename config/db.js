const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://db:27017/encurtador-url';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Conectado...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;