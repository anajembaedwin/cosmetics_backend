// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures that category names are unique
  },
  description: String,
});

module.exports = mongoose.model('Category', categorySchema);
