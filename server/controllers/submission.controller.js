const Submission = require('../models/submission.model');
const Review = require('../models/review.model');
const Location = require('../models/location.model'); 

const SubmissionController = {
    createSubmission: async (req, res) => {
        try {
            const newSubmission = new Submission({ ...req.body, user: req.user._id });
            await newSubmission.save();
            res.status(201).json(newSubmission);
        } catch (error) {
            res.status(400).json({ message: "Error creating submission: " + error.message });
        }
    },

    getSubmissionById: async (req, res) => {
        try {
            const submission = await Submission.findById(req.params.id)
                .populate('user', 'name')
                .populate('categories');
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found' });
            }
            const reviews = await Review.find({ submission: req.params.id });
            res.status(200).json({ submission, reviews });
        } catch (error) {
            res.status(500).json({ message: "Error fetching submission: " + error.message });
        }
    },

    getSubmissions: async (req, res) => {
        try {
            let query = {};
            let aggregatePipeline = [];
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 20;
            const skip = (page - 1) * limit;
    
            // Filter by location
            if (req.query.location) {
                const location = await Location.findOne({ name: req.query.location });
                if (location) {
                    query['location'] = location._id;
                }
            }
    
            // Base aggregation pipeline
            aggregatePipeline.push({ $match: query });
            aggregatePipeline.push({ $lookup: { from: 'reviews', localField: '_id', foreignField: 'submission', as: 'reviews' } });
            aggregatePipeline.push({ $unwind: { path: '$reviews', preserveNullAndEmptyArrays: true } });
            aggregatePipeline.push({ $group: { _id: '$_id', doc: { $first: '$$ROOT' }, averageRating: { $avg: '$reviews.rating' } } });
            aggregatePipeline.push({ $replaceRoot: { newRoot: { $mergeObjects: ['$doc', { averageRating: '$averageRating' }] } } });
    
            // Add $lookup for user, categories, and location
            aggregatePipeline.push({ $lookup: { from: 'users', localField: 'doc.user', foreignField: '_id', as: 'user' } });
            aggregatePipeline.push({ $lookup: { from: 'categories', localField: 'doc.categories', foreignField: '_id', as: 'categories' } });
            aggregatePipeline.push({ $lookup: { from: 'locations', localField: 'doc.location', foreignField: '_id', as: 'location' } });
            aggregatePipeline.push({ $unwind: { path: '$user', preserveNullAndEmptyArrays: true } });
            aggregatePipeline.push({ $unwind: { path: '$categories', preserveNullAndEmptyArrays: true } });
            aggregatePipeline.push({ $unwind: { path: '$location', preserveNullAndEmptyArrays: true } });
    
            // Sorting logic
            if (req.query.sort) {
                switch (req.query.sort) {
                    case 'highestReviewRatings':
                        aggregatePipeline.push({ $sort: { averageRating: -1 } });
                        break;
                    case 'recentAdditions':
                        aggregatePipeline.push({ $sort: { 'doc.createdAt': -1 } });
                        break;
                    case 'oldestSubmissions':
                        aggregatePipeline.push({ $sort: { 'doc.createdAt': 1 } });
                        break;
                }
            }
    
            aggregatePipeline.push({ $skip: skip });
            aggregatePipeline.push({ $limit: limit });
    
            const submissions = await Submission.aggregate(aggregatePipeline);
    
            res.status(200).json(submissions);
        } catch (error) {
            res.status(500).json({ message: "Error fetching submissions: " + error.message });
        }
    },

    updateSubmission: async (req, res) => {
        try {
            const submission = await Submission.findOneAndUpdate(
                { _id: req.params.id, user: req.user._id },
                req.body,
                { new: true }
            );
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found or user not authorized' });
            }
            res.status(200).json(submission);
        } catch (error) {
            res.status(400).json({ message: "Error updating submission: " + error.message });
        }
    },

    deleteSubmission: async (req, res) => {
        try {
            const submission = await Submission.findOneAndDelete(
                { _id: req.params.id, user: req.user._id }
            );
            if (!submission) {
                return res.status(404).json({ message: 'Submission not found or user not authorized' });
            }
            res.status(200).json({ message: 'Submission deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: "Error deleting submission: " + error.message });
        }
    }
};

module.exports = SubmissionController;
