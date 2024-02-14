const AllyPost = require('../models/allypost.model');

const AllyPostController = {
    createAllyPost: async (req, res) => {
        try {
            const { content = '' } = req.body; // Default content to an empty string if not provided
            let images = [];
            if (req.file) {
                images.push(req.file.path);
            }
            if (!content && images.length === 0) {
                return res.status(400).json({ error: 'A post must have either text content or an image.' });
            }
            const allyPost = new AllyPost({
                user: req.user._id,
                content,
                images
            });
            await allyPost.save();
            res.status(201).json({ message: 'AllyPost created successfully', allyPost });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllAllyPosts: async (req, res) => {
        try {
            let query = AllyPost.find().populate('user', 'username').sort({ createdAt: -1 });
            if (req.query.limit) {
                query = query.limit(parseInt(req.query.limit));
            }
            const allyPosts = await query;
            res.status(200).json(allyPosts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllyPostById: async (req, res) => {
        try {
            const allyPost = await AllyPost.findById(req.params.id).populate('user', 'username');
            if (!allyPost) {
                return res.status(404).json({ message: 'AllyPost not found' });
            }
            res.status(200).json(allyPost);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllyPostsByUser: async (req, res) => {
        try {
            const allyPosts = await AllyPost.find({ user: req.params.userId }).populate('user', 'username');
            res.status(200).json(allyPosts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateAllyPost: async (req, res) => {
        try {
            const { content } = req.body;
            let images = [];
            const allyPost = await AllyPost.findOne({ _id: req.params.id, user: req.user._id });
            if (!allyPost) {
                return res.status(404).json({ message: 'AllyPost not found or not authorized' });
            }

            if (content) allyPost.content = content;
            if (req.file) {
                images.push(req.file.path);
                allyPost.images = images;
            }

            await allyPost.save();
            res.status(200).json({ message: 'AllyPost updated successfully', allyPost });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteAllyPost: async (req, res) => {
        try {
            const result = await AllyPost.deleteOne({ _id: req.params.id, user: req.user._id });
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: 'AllyPost not found or not authorized' });
            }
            res.status(200).json({ message: 'AllyPost deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = AllyPostController;

