// controllers/userWishlistController.js
const User = require('../models/User');

exports.getUserWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate('wishlist');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addProductToWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.wishlist.includes(productId)) {
      return res.status(400).json({ error: 'Product already in wishlist' });
    }

    user.wishlist.push(productId);
    await user.save();

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeProductFromWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
    await user.save();

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
