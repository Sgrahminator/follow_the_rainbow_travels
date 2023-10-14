const express = require('express');
const router = express.Router();
const AllyCornerController = require('../controllers/allycorner.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Get a list of ally questions
router.get('/allyquestions', AllyCornerController.getAllAllyQuestions);

// Create a new ally question
router.post('/allyquestion', AllyCornerController.createAllyQuestion);

// Get details of a specific ally question
router.get('/allyquestion/:id', AllyCornerController.getAllyQuestionById);

// Get a list of ally support posts
router.get('/allyposts', AllyCornerController.getAllAllyPosts);

// Create a new ally support post
router.post('/allypost', AllyCornerController.createAllyPost);

// Get details of a specific ally support post
router.get('/allypost/:id', AllyCornerController.getAllyPostById);

module.exports = router;


