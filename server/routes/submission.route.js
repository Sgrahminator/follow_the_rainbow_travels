const express = require('express');
const router = express.Router();
const SubmissionController = require('../controllers/submission.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Create a new submission
router.post('/submission', SubmissionController.createSubmission);

// Get details of a specific submission
router.get('/submission/:id', SubmissionController.getSubmissionById);

// Get a list of submissions (filtered by category, location, etc.)
router.get('/submissions', SubmissionController.getSubmissions);

// Update a submission (if allowed by the user)
router.put('/submission/:id', SubmissionController.updateSubmission);

// Delete a submission (if allowed by the user)
router.delete('/submission/:id', SubmissionController.deleteSubmission);

module.exports = router;

