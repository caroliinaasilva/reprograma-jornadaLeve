const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const authenticateToken = (req, res, next) => {
  const authHeader = req.get('authorization');
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization required to access' });
  }
  
  const token = authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Access Denied - Invalid token' });
    }
    
    req.user = decoded;
    return next();
  });
};

module.exports = {
  authenticateToken,
}; 