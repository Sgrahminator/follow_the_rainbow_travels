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

// Update a question
router.put('/allyquestionanswer/:id', requireAuth, AllyQuestionAnswerController.updateAllyQuestion);

// Delete a question
router.delete('/allyquestionanswer/:id', requireAuth, AllyQuestionAnswerController.deleteAllyQuestion);

// Get all questions/answers from a specific user
router.get('/user-allyquestionanswer/:userId', requireAuth, AllyQuestionAnswerController.getAllyQuestionsByUser);

// Add an answer to a question
router.post('/allyquestionanswer/:id/answer', requireAuth, AllyQuestionAnswerController.addAnswerToQuestion);

// Update an answer
router.put('/allyquestionanswer/:questionId/answer/:answerId', requireAuth, AllyQuestionAnswerController.updateAllyAnswer);

// Delete an answer
router.delete('/allyquestionanswer/:questionId/answer/:answerId', requireAuth, AllyQuestionAnswerController.deleteAllyAnswer);

module.exports = router;

