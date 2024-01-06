const mongoose = require('mongoose');
const Review = require('../models/review.model');
const Submission = require('../models/submission.model');

const ReviewController = {
    createReview: async (req, res) => {
        try {
            const { submissionId, comment, photos, rating } = req.body;

            if (!mongoose.Types.ObjectId.isValid(submissionId)) {
                return res.status(400).json({ message: 'Invalid submission ID' });
            }

            const submission = await Submission.findById(submissionId);
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found' });
            }

            if (!rating || rating < 1 || rating > 7) {
                return res.status(400).json({ message: 'Invalid rating' });
            }

            const newReview = new Review({
                submission: submissionId,
                user: req.user._id,
                comment,
                photos,
                rating
            });

            await newReview.save();
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getReviewById: async (req, res) => {
        try {
            const review = await Review.findById(req.params.id)
                                        .populate('user', 'name')
                                        .populate('submission');
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }
            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getReviewsByUser: async (req, res) => {
        try {
            const reviews = await Review.find({ user: req.params.userId })
                                        .populate('submission');
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getReviewsForSubmission: async (req, res) => {
        try {
            const reviews = await Review.find({ submission: req.params.submissionId })
                                        .populate('user', 'name');
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateReview: async (req, res) => {
        try {
            const { id } = req.params;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ message: 'Invalid review ID' });
            }

            const review = await Review.findById(id);
            if (!review) {
                return res.status(404).json({ message: 'Review not found' });
            }

            if (review.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ message: 'User not authorized to update this review' });
            }

            const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(updatedReview);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteReview: async (req, res) => {
        try {
            const review = await Review.findOneAndDelete(
                { _id: req.params.id, user: req.user._id }
            );
            if (!review) {
                return res.status(404).json({ message: 'Review not found or user not authorized' });
            }
            res.status(200).json({ message: 'Review deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = ReviewController;
