// middleware/adminAuthMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'secret_key');

    // Assuming you have some way to identify an admin (e.g., a flag in the JWT payload)
    if (!decoded.isAdmin) {
      return res.status(401).json({ msg: 'Not authorized as an admin' });
    }

    req.adminId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
