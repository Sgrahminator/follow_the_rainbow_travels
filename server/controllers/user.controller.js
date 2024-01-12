const User = require('../models/user.model');
const Submission = require('../models/submission.model');
const Review = require('../models/review.model');
const SafetyTip = require('../models/safetytip.model');
const AllyPost = require('../models/allypost.model');
const AllyQuestionAnswer = require('../models/allyquestionanswer.model');

const UserController = {
    getUserProfile: async (req, res) => {
        try {
            const userId = req.user._id;
            const user = await User.findById(userId);
            const userSubmissions = await Submission.find({ user: userId }).populate('reviews');
            const userReviews = await Review.find({ user: userId });

            const userSafetyTips = await SafetyTip.find({ user: userId });
            const userAllyPosts = await AllyPost.find({ user: userId });
            const userAllyQuestionAnswer = await AllyQuestionAnswer.find({ user: userId });

            res.status(200).json({ 
                userProfile: user,
                submissions: userSubmissions, 
                reviews: userReviews, 
                safetyTips: userSafetyTips,
                allyPosts: userAllyPosts,
                allyQuestionAnswer: userAllyQuestionAnswer
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOtherUserProfile: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findById(userId, 'username');
            const userSubmissions = await Submission.find({ user: userId }).populate('reviews');
            const userReviews = await Review.find({ user: userId });

            const userSafetyTips = await SafetyTip.find({ user: userId });
            const userAllyPosts = await AllyPost.find({ user: userId });
            const userAllyQuestionAnswer = await AllyQuestionAnswer.find({ user: userId }); 

            res.status(200).json({ 
                userProfile: user,
                submissions: userSubmissions, 
                reviews: userReviews,
                safetyTips: userSafetyTips,
                allyPosts: userAllyPosts,
                allyQuestionAnswer: userAllyQuestionAnswer
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUserProfile: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
            res.status(200).json({ message: 'User profile updated', updatedUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteUserProfile: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.user._id);
            res.status(200).json({ message: 'User profile deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = UserController;
