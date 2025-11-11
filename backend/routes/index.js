// Example route file
const express = require('express');
const router = express.Router();

// Add your routes here
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

module.exports = router;
