const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const collection = require('./modules/UserModel');

// Register User Route
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new collection({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Logout Route with Token
router.post('/logout', (req, res) => {
  try {
    // Depending on your authentication method, you might have a token to invalidate on the client side.
    // You can clear the token from cookies or local storage here.

    const token = req.headers.authorization; // Assuming the token is sent in the Authorization header

    // Check if the token is present
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Verify the token to ensure it's valid
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      // Optionally, you can perform additional checks here based on the decoded token

      // Respond with a success message
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


module.exports = router;
