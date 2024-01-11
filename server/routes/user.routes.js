const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Get a user's own profile (Authenticated user's profile)
router.get('/profile', UserController.getUserProfile);

// Update the authenticated user's profile
router.put('/profile', UserController.updateUserProfile);

// Delete the authenticated user's profile
router.delete('/profile', UserController.deleteUserProfile);

// Get another user's profile (public view)
router.get('/profile/:id', UserController.getOtherUserProfile);

module.exports = router;
