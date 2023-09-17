// routes/adminProfileRoutes.js
const express = require('express');
const router = express.Router();
const adminProfileController = require('../controllers/adminProfileController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, adminProfileController.getAdminProfile);
router.put('/', authMiddleware, adminProfileController.updateAdminProfile);

module.exports = router;
