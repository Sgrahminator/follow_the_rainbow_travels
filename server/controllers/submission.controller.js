const Submission = require('../models/submission.model');
const Review = require('../models/review.model');

const SubmissionController = {
    createSubmission: async (req, res) => {
        try {
            const newSubmission = new Submission({ ...req.body, user: req.user._id });
            await newSubmission.save();
            res.status(201).json(newSubmission);
        } catch (error) {
            res.status(400).json({ message: error.message });
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
            res.status(500).json({ message: error.message });
        }
    },

    getSubmissions: async (req, res) => {
        try {
            let query = {};
            let sort = {};
            let aggregatePipeline = [];

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

            // Sorting logic
            switch (req.query.sort) {
                case 'highestRatings':
                    aggregatePipeline.push({ $sort: { averageRating: -1 } });
                    break;
                case 'recentAdditions':
                    sort = { createdAt: -1 };
                    break;
                case 'oldestSubmissions':
                    sort = { createdAt: 1 };
                    break;
            }

            if (req.query.sort !== 'highestRatings') {
                aggregatePipeline.push({ $sort: sort });
            }

            const submissions = await Submission.aggregate(aggregatePipeline)
                                                .populate('user', 'name')
                                                .populate('categories')
                                                .populate('location');

            res.status(200).json(submissions);
        } catch (error) {
            res.status(500).json({ message: error.message });
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
            res.status(400).json({ message: error.message });
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
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = SubmissionController;

