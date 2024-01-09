const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/review.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Create a new review 
router.post('/review', requireAuth,  ReviewController.createReview);

// Get details of a specific review
router.get('/review/:id', requireAuth,  ReviewController.getReviewById);

// Get all reviews by a specific user
router.get('/user-reviews/:userId', requireAuth,  ReviewController.getReviewsByUser);

// Get all reviews for a specific submission
router.get('/reviews/:submissionId', requireAuth,  ReviewController.getReviewsForSubmission);

// Update a review (if the authorized user)
router.put('/review/:id', requireAuth,  ReviewController.updateReview);

// Delete a review (if the authorized user)
router.delete('/review/:id', requireAuth,  ReviewController.deleteReview);

module.exports = router;
