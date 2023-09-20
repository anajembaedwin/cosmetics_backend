// controllers/productController.js
const Product = require('../models/Product');
const Category = require('../models/Category');

exports.getAllProducts = async (req, res) => {
  try {
    const page = req.query.page || 1; // Default to page 1 if not specified
    const perPage = 10; // Number of products per page

    const products = await Product.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, subcategory } = req.body;

    // Fetch the category and subcategory IDs based on their names
    const categoryObject = await Category.findOne({ name: category });
    const subcategoryObject = await Category.findOne({ 'subCategories.name': subcategory });

    if (!categoryObject || !subcategoryObject) {
      return res.status(400).json({ error: 'Invalid category or subcategory' });
    }

    const product = await Product.create({
      name,
      price,
      description,
      category: categoryObject._id,
      subcategory: subcategoryObject.subCategories.find(sub => sub.name === subcategoryObject).id,
    });

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

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
