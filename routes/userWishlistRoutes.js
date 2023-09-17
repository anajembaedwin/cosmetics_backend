// routes/userWishlistRoutes.js
const express = require('express');
const router = express.Router();
const userWishlistController = require('../controllers/userWishlistController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, userWishlistController.getUserWishlist);
router.post('/:productId', authMiddleware, userWishlistController.addProductToWishlist);
router.delete('/:productId', authMiddleware, userWishlistController.removeProductFromWishlist);

module.exports = router;
