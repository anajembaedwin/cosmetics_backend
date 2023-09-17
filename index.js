// index.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const adminProductRoutes = require('./routes/adminProductRoutes');
const adminOrderRoutes = require('./routes/adminOrderRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const adminProfileRoutes = require('./routes/adminProfileRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userWishlistRoutes = require('./routes/userWishlistRoutes');

const authMiddleware = require('./middleware/authMiddleware');
const db = require('./config/database');

const app = express();

app.use(helmet()); // Use Helmet for security headers
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use bodyParser for parsing JSON
app.use(bodyParser.json());

// Product routes
app.use('/api/products', productRoutes);
app.use('/api/products', reviewRoutes);

// User routes
app.use('/api/users', userRoutes);
app.use('/api/users/profile', userProfileRoutes);
app.use('/api/users/wishlist', userWishlistRoutes);
app.use('/api/cart', authMiddleware, cartRoutes);
app.use('/api/auth', authRoutes);

// Admin routes
app.use('/api/admin', adminRoutes);
app.use('/api/admin/profile', adminProfileRoutes);
app.use('/api/admin/products', adminProductRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/admin/auth', adminAuthRoutes);


// Protected route example
app.get('/api/user', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
