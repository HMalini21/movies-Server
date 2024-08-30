const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory storage for demo purposes (use a real database in production)
const users = [];

const signUp = (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send('Error hashing password');
    users.push({ username, password: hashedPassword });
    res.status(200).send('User registered');
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(401).send('User not found');
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) return res.status(500).send('Error comparing passwords');
    if (!isMatch) return res.status(401).send('Invalid credentials');
    const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  });
};

module.exports = { signUp, login };
