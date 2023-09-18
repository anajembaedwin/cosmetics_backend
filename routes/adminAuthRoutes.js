// routes/adminAuthRoutes.js
const express = require('express');
const router = express.Router();
const adminAuthController = require('../controllers/adminAuthController');

router.post('/login', adminAuthController.loginAdmin);
router.post('/register', adminAuthController.registerAdmin);

module.exports = router;
