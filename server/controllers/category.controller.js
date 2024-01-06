const Category = require('../models/category.model');
const Submission = require('../models/submission.model');

const CategoryController = {
    // Get all categories
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find({});
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a specific category by ID, along with top-rated submissions
    getCategoryById: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const category = await Category.findById(categoryId).lean();

            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }

            // Aggregate top-rated submissions for this category
            const submissions = await Submission.aggregate([
                { $match: { categories: categoryId } },
                { $unwind: "$ratings" },
                { $sort: { "ratings.rating": -1 } },
                { $limit: 10 },
                { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "userDetails" } },
                { $project: { name: 1, description: 1, userDetails: { $arrayElemAt: ["$userDetails", 0] } } }
            ]);

            res.status(200).json({ category, submissions });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

};

module.exports = CategoryController;
