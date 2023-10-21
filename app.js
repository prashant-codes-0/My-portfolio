const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const cors = require('cors');

// Use CORS middleware
app.use(cors());


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use API routes
app.use('/api', apiRoutes);

module.exports = app;
