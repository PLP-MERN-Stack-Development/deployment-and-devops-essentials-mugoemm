require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


// Middleware
app.use(helmet()); // Security headers
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Users CRUD API
app.use('/api/users', require('./routes/users'));

// Example route (replace with real routes)
app.get('/', (req, res) => {
  res.send('API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
