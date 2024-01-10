const Category = require('../models/category.model');
const Submission = require('../models/submission.model');

const CategoryController = {
    // Get all categories
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find({});
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    },

    // Get a specific category by Name, along with top-rated submissions
    getCategoryByName: async (req, res) => {
        try {
            const categoryName = req.params.name;  // Changed from id to name
            const sortOption = req.query.sort || "ratings.rating";
            const sortOrder = req.query.order === "asc" ? 1 : -1;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;

            const category = await Category.findOne({ name: categoryName }).lean(); // Changed from findById to findOne
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }

            const submissions = await Submission.aggregate([
                { $match: { categories: category._id } }, // Use the _id from the found category
                { $unwind: "$ratings" },
                { $sort: { [sortOption]: sortOrder } },
                { $skip: skip },
                { $limit: limit },
                { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "userDetails" } },
                { $project: { name: 1, description: 1, userDetails: { $arrayElemAt: ["$userDetails", 0] } } }
            ]);

            res.status(200).json({ category, submissions });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
};

module.exports = CategoryController;
