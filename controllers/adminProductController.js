// controllers/adminProductController.js
const Product = require('../models/Product');

// TODO: update code for product image
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Check if price is a valid number
    if (isNaN(parseFloat(price)) || !isFinite(price)) {
      return res.status(400).json({ error: 'Price must be a valid number' });
    }

    // Check if name and description meet certain criteria (e.g., not empty)
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    const product = await Product.create({
      name,
      price,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, price, description } = req.body;

    // Check if price is a valid number
    if (price && (isNaN(parseFloat(price)) || !isFinite(price))) {
      return res.status(400).json({ error: 'Price must be a valid number' });
    }

    // Check if name and description meet certain criteria (e.g., not empty)
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    const product = await Product.findByIdAndUpdate(
      productId,
      { name, price, description },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
