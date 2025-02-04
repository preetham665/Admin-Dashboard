

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// GET a specific user by ID
router.get('/:id', async (req, res) => {
  try {
    console.log('Fetching user with ID:', req.params.id);
    
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    console.log('Updating user with ID:', req.params.id);
    console.log('Request body:', req.body);

    const { username, fullName, email, phone, address, avatar, jobTitle, birthDate } = req.body;

    if (!username || !email) {
      return res.status(400).json({ error: 'Username and Email are required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, fullName, email, phone, address, avatar, jobTitle, birthDate },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    console.log('Deleting user with ID:', req.params.id);

    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;
