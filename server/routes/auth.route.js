const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const { requireAuth } = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', AuthController.registerUser);

// Log in an existing user
router.post('/login', AuthController.loginUser);

// Log out the current user
router.get('/logout', requireAuth, AuthController.logoutUser);

// Get user information for the authenticated user
router.get('/user', requireAuth, AuthController.getAuthenticatedUser);

module.exports = router;


