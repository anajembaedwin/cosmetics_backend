// index.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const db = require('./config/database');

const app = express();

app.use(helmet()); // Use Helmet for security headers
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use bodyParser for parsing JSON
app.use(bodyParser.json());

// Set up routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', authMiddleware, cartRoutes);

// Protected route example
app.get('/api/user', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
