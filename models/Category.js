// models/Category.js

const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  subCategories: [subCategorySchema], // Array of sub-categories
});

module.exports = mongoose.model('Category', categorySchema);



// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true, // Ensures that category names are unique
//   },
//   description: String,
// });

// module.exports = mongoose.model('Category', categorySchema);
