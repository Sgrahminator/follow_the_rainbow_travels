const express = require('express');
const router = express.Router();
const AllyPostController = require('../controllers/allypost.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Create a new submission 
router.post('/allypost', AllyPostController.createAllyPost);

// Get details of a specific submission
router.get('/allypost/:id', AllyPostController.getAllyPostById);

// Get all allyposts
router.get('/allyposts', AllyPostController.getAllAllyPosts);

// Get all allyposts by a specific user
router.get('/user-allyposts/:userId', AllyPostController.getAllyPostsByUser);

// Update a allypost (if the authorized user)
router.put('/allypost/:id', AllyPostController.updateAllyPost);

// Delete a allypost (if the authorized user)
router.delete('/allypost/:id', AllyPostController.deleteAllyPost);

module.exports = router;