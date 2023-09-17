// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);
router.get('/search', productController.searchProducts);
router.get('/category/:categoryId', productController.filterProductsByCategory);

module.exports = router;
