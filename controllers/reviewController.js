// controllers/reviewController.js
const Product = require('../models/Product');

exports.addReview = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { rating, comment } = req.body;

    // Validate rating and comment
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
    }

    if (typeof comment !== 'string' || comment.trim().length === 0) {
      return res.status(400).json({ error: 'Comment must be a non-empty string' });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.reviews.push({ rating, comment });
    await product.save();

    res.json(product.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateReview = async (req, res) => {
  try {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    const { rating, comment } = req.body;

    // Validate rating and comment
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
    }

    if (typeof comment !== 'string' || comment.trim().length === 0) {
      return res.status(400).json({ error: 'Comment must be a non-empty string' });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const review = product.reviews.id(reviewId);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    review.rating = rating;
    review.comment = comment;
    await product.save();

    res.json(product.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteReview = async (req, res) => {
  try {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const review = product.reviews.id(reviewId);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    review.remove();
    await product.save();

    res.json(product.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

