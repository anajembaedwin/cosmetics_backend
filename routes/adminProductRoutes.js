// routes/adminProductRoutes.js
const express = require('express');
const router = express.Router();
const adminProductController = require('../controllers/adminProductController');

router.post('/create', adminProductController.createProduct);
router.put('/update/:productId', adminProductController.updateProduct);
router.delete('/delete/:productId', adminProductController.deleteProduct);

module.exports = router;
