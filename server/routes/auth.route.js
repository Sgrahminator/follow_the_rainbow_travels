const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Register a new user
router.post('/register', AuthController.registerUser);

// Log in an existing user
router.post('/login', AuthController.loginUser);

// Log out the current user
router.get('/logout', AuthController.logoutUser);

// Get user information for the authenticated user
router.get('/user', AuthController.getAuthenticatedUser);

module.exports = router;

