// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');


// Define your category routes here
router.get('/', adminAuthMiddleware, categoryController.getAllCategories);
router.post('/categories/create', adminAuthMiddleware, categoryController.createCategory);
router.get('/categories/:categoryId', adminAuthMiddleware, categoryController.getCategoryById);
router.put('/categories/update/:categoryId', adminAuthMiddleware, categoryController.updateCategory);
router.delete('/categories/delete/:categoryId', adminAuthMiddleware, categoryController.deleteCategory);

module.exports = router;

