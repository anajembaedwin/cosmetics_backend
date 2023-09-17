// controllers/adminAuthController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate admin credentials (you can customize this part)
    const isAdmin = (username === 'admin' && password === 'adminpassword');

    if (!isAdmin) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: 'unique_admin_id', isAdmin: true }, 'secret_key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
