const express = require('express');
const router = express.Router();
const AllyPostController = require('../controllers/allypost.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Create a new post 
router.post('/allypost', requireAuth,  AllyPostController.createAllyPost);

// Get details of a specific post
router.get('/allypost/:id', requireAuth,  AllyPostController.getAllyPostById);

// Get all allyposts
router.get('/allyposts', requireAuth,  AllyPostController.getAllAllyPosts);

// Get all allyposts by a specific user
router.get('/allyposts/byuser/:userId', requireAuth,  AllyPostController.getAllyPostsByUser);

// Update a allypost (if the authorized user)
router.put('/allypost/:id', requireAuth,  AllyPostController.updateAllyPost);

// Delete a allypost (if the authorized user)
router.delete('/allypost/:id', requireAuth,  AllyPostController.deleteAllyPost);

module.exports = router;