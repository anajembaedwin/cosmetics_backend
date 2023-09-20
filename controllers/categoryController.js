// controllers/categoryController.js

const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
  try {
    const { isAdmin } = req.user; // Assuming you have an isAdmin property in the user object after authentication

    if (!isAdmin) {
      return res.status(403).json({ error: 'Permission denied. Only admins can access this route.' });
    }

    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Permission denied. Only admins can access this route.' });
    }

    const { name, description, subCategories } = req.body;
    const category = await Category.create({ name, description, subCategories });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Permission denied. Only admins can access this route.' });
    }

    // Logic to get a category by ID goes here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Permission denied. Only admins can access this route.' });
    }

    // Logic to update a category goes here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Permission denied. Only admins can access this route.' });
    }

    // Logic to delete a category goes here
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
