// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category.subcategories',
    required: true,
  },
//   images: [{ type: String }], // An array of image URLs
//   ratings: {
//     type: Number,
//     default: 0, // Default value for ratings is set to 0
//   },
//   reviews: [{ 
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     text: String,
//     rating: Number,
//   }],
//   stock: {
//     type: Number,
//     default: 0, // Default value for stock is set to 0
//   },
});

module.exports = mongoose.model('Product', productSchema);