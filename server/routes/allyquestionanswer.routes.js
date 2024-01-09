const express = require('express');
const router = express.Router();
const AllyQuestionAnswerController = require('../controllers/allyquestionanswer.controller'); 
const { requireAuth } = require('../middleware/authMiddleware');

// Create a new question
router.post('/allyquestionanswer', requireAuth, AllyQuestionAnswerController.createAllyQuestion);

// Get a specific question with its answers
router.get('/allyquestionanswer/:id', requireAuth, AllyQuestionAnswerController.getAllyQuestionById);

// Get all questions with their answers
router.get('/allyquestionanswer', requireAuth, AllyQuestionAnswerController.getAllAllyQuestions);

// Update a question or answer (if the authorized user)
router.put('/allyquestionanswer/:id', requireAuth, AllyQuestionAnswerController.updateAllyQuestion);

// Delete a question or answer (if the authorized user)
router.delete('/allyquestionanswer/:id', requireAuth, AllyQuestionAnswerController.deleteAllyQuestion);

// Get all questions/answers from a specific user
router.get('/user-allyquestionanswer/:userId', requireAuth, AllyQuestionAnswerController.getAllyQuestionsByUser);

// Add an answer to a question
router.post('/allyquestionanswer/:id/answer', requireAuth, AllyQuestionAnswerController.addAnswerToQuestion);

module.exports = router;
