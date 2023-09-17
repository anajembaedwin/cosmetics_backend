// controllers/productController.js
const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const query = req.query.q; // Assuming the search query is provided as a query parameter

    const products = await Product.find({
      $or: [
        { name: { $regex: new RegExp(query, 'i') } }, // Case-insensitive search for product names
        { description: { $regex: new RegExp(query, 'i') } } // Case-insensitive search for product descriptions
      ]
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.filterProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const products = await Product.find({ categoryId }); // Assuming you have a categoryId field in your Product model

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
