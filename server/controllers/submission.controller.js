const Submission = require('../models/submission.model');
const Review = require('../models/review.model');
const User = require('../models/user.model'); 

const SubmissionController = {
    // Create a new submission
    createSubmission: async (req, res) => {
        try {
            const newSubmission = new Submission({ ...req.body, user: req.user._id });
            await newSubmission.save();
            res.status(201).json(newSubmission);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Get details of a specific submission
    getSubmissionById: async (req, res) => {
        try {
            const submission = await Submission.findById(req.params.id).populate('user', 'name');
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found' });
            }
            res.status(200).json(submission);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a list of submissions with optional filters
    getSubmissions: async (req, res) => {
        try {
            const query = {}; // Build query based on filters like category, location, etc.
            const submissions = await Submission.find(query).populate('user', 'name');
            res.status(200).json(submissions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a submission
    updateSubmission: async (req, res) => {
        try {
            const submission = await Submission.findOne({ _id: req.params.id, user: req.user._id });
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found or user not authorized' });
            }

            Object.assign(submission, req.body);
            await submission.save();
            res.status(200).json(submission);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a submission
    deleteSubmission: async (req, res) => {
        try {
            const submission = await Submission.findOneAndDelete({ _id: req.params.id, user: req.user._id });
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found or user not authorized' });
            }
            res.status(200).json({ message: 'Submission deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

};

module.exports = SubmissionController;
