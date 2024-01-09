const express = require('express');
const router = express.Router();
const AllyQuestionController = require('../controllers/allyquestionanswer.controller'); 
const { requireAuth } = require('../middleware/authMiddleware');

// Create a new question
router.post('/allyquestion', requireAuth, AllyQuestionController.createAllyQuestion);

// Get a specific question with its answers
router.get('/allyquestion/:id', requireAuth, AllyQuestionController.getAllyQuestionById);

// Get all questions with their answers
router.get('/allyquestions', requireAuth, AllyQuestionController.getAllAllyQuestions);

// Update a question or answer (if the authorized user)
router.put('/allyquestion/:id', requireAuth, AllyQuestionController.updateAllyQuestion);

// Delete a question or answer (if the authorized user)
router.delete('/allyquestion/:id', requireAuth, AllyQuestionController.deleteAllyQuestion);

// Get all questions/answers from a specific user
router.get('/user-allyquestions/:userId', requireAuth, AllyQuestionController.getAllyQuestionsByUser);

module.exports = router;
