const express = require('express');
const router = express.Router();
const AllyQuestionController = require('../controllers/allyquestion.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Create a new question
router.post('/allyquestion', AllyQuestionController.createAllyQuestion);

// Get a specific question with its answers
router.get('/allyquestion/:id', AllyQuestionController.getAllyQuestionById);

// Get all questions with their answers
router.get('/allyquestions', AllyQuestionController.getAllAllyQuestions);

// Update a question or answer (if the authorized user)
router.put('/allyquestion/:id', AllyQuestionController.updateAllyQuestion);

// Delete a question or answer (if the authorized user)
router.delete('/allyquestion/:id', AllyQuestionController.deleteAllyQuestion);

// Get all questions/answers from a specific user
router.get('/user-allyquestions/:userId', AllyQuestionController.getAllyQuestionsByUser);

module.exports = router;
