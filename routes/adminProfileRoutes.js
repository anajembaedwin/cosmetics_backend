// routes/adminProfileRoutes.js
const express = require('express');
const router = express.Router();
const adminProfileController = require('../controllers/adminProfileController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');

router.get('/', adminAuthMiddleware, adminProfileController.getAdminProfile);
router.put('/', adminAuthMiddleware, adminProfileController.updateAdminProfile);

module.exports = router;

