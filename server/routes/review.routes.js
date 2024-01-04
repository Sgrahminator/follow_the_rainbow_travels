const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/review.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Create a new review for a submission
router.post('/review', ReviewController.createReview);

// Get details of a specific review
router.get('/review/:id', ReviewController.getReviewById);

// Get all reviews for a specific submission
router.get('/reviews/:submissionId', ReviewController.getReviewsForSubmission);

// Update a review (if allowed by the user)
router.put('/review/:id', ReviewController.updateReview);

// Delete a review (if allowed by the user)
router.delete('/review/:id', ReviewController.deleteReview);

module.exports = router;

