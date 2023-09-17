// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getCart);
router.post('/add', cartController.addToCart);
router.put('/update/:productId', cartController.updateCartItem);
router.delete('/remove/:productId', cartController.removeFromCart);

module.exports = router;
