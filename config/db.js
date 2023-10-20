const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


     } catch (error) {
    mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err);
});
  }
};

module.exports = connectDB;
