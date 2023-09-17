// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

// Apply the adminAuthMiddleware to routes that require authentication
router.get('/users', adminAuthMiddleware, adminController.viewAllUsers);
router.get('/users/:userId', adminAuthMiddleware, adminController.viewUserDetails);
router.post('/users/create', adminAuthMiddleware, adminController.createUser);
router.put('/users/update/:userId', adminAuthMiddleware, adminController.updateUser);
router.delete('/users/delete/:userId', adminAuthMiddleware, adminController.deleteUser);


module.exports = router;
