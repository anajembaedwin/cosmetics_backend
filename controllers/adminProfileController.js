// controllers/adminProfileController.js
const Admin = require('../models/Admin');

exports.getAdminProfile = async (req, res) => {
  try {
    const adminId = req.user.id;
    const admin = await Admin.findById(adminId).select('-password');
    
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAdminProfile = async (req, res) => {
  try {
    const adminId = req.user.id;
    const { username } = req.body;

    // Additional validation check: Ensure the username follows a specific format
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/; // Example: Alphanumeric, underscores, and hyphens, 3-20 characters
    if (!username.match(usernameRegex)) {
      return res.status(400).json({ error: 'Invalid username format' });
    }

    const admin = await Admin.findByIdAndUpdate(
      adminId,
      { username },
      { new: true }
    ).select('-password');

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
