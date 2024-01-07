const express = require('express');
const router = express.Router();
const SubmissionController = require('../controllers/submission.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Create a new submission
router.post('/submission', requireAuth, SubmissionController.createSubmission);

// Get details of a specific submission
router.get('/submission/:id', requireAuth, SubmissionController.getSubmissionById);

// Get a list of submissions (filtered by category, location, etc.)
router.get('/submissions', requireAuth, SubmissionController.getSubmissions);

// Update a submission (if they're the authorized user)
router.put('/submission/:id', requireAuth, SubmissionController.updateSubmission);

// Delete a submission (if they're the authorized user)
router.delete('/submission/:id', requireAuth, SubmissionController.deleteSubmission);

module.exports = router;


