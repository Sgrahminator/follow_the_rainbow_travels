const User = require('../models/user.model');

exports.getUserProfile = async (req, res) => {
    try {
        res.status(200).json({ userProfile: req.user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
        res.status(200).json({ message: 'User profile updated', updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUserProfile = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user._id);
        res.status(200).json({ message: 'User profile deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOtherUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ userProfile: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
