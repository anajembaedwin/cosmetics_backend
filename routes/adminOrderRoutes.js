// routes/adminOrderRoutes.js
const express = require('express');
const router = express.Router();
const adminOrderController = require('../controllers/adminOrderController');

router.get('/', adminOrderController.viewAllOrders);
router.put('/update/:orderId', adminOrderController.updateOrderStatus);
router.get('/:orderId', adminOrderController.viewOrderDetails);

module.exports = router;
