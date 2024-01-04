const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/review.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Create a new review 
router.post('/review', ReviewController.createReview);

// Get details of a specific review
router.get('/review/:id', ReviewController.getReviewById);

// Get all reviews by a specific user
router.get('/user-reviews/:userId', ReviewController.getReviewsByUser);

// Get all reviews for a specific submission
router.get('/reviews/:submissionId', ReviewController.getReviewsForSubmission);

// Update a review (if the authorized user)
router.put('/review/:id', ReviewController.updateReview);

// Delete a review (if the authorized user)
router.delete('/review/:id', ReviewController.deleteReview);

module.exports = router;

