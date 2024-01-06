const SafetyTip = require('../models/safetytip.model');
const User = require('../models/user.model');

const SafetyTipController = {
    // Create a new safety tip
    createSafetyTip: async (req, res) => {
        try {
            const { tip } = req.body;
            const safetyTip = new SafetyTip({
                tip: tip,
                user: req.user._id 
            });
            await safetyTip.save();
            res.status(201).json(safetyTip);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Get all safety tips
    getAllSafetyTips: async (req, res) => {
        try {
            const safetyTips = await SafetyTip.find().populate('user', 'username');
            res.status(200).json(safetyTips);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get a specific safety tip by ID
    getSafetyTipById: async (req, res) => {
        try {
            const { id } = req.params;
            const safetyTip = await SafetyTip.findById(id).populate('user', 'username');
            if (!safetyTip) {
                return res.status(404).json({ error: 'Safety tip not found' });
            }
            res.status(200).json(safetyTip);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update a safety tip
    updateSafetyTip: async (req, res) => {
        try {
            const { id } = req.params;
            const { tip } = req.body;
            const safetyTip = await SafetyTip.findById(id);

            if (!safetyTip) {
                return res.status(404).json({ error: 'Safety tip not found' });
            }

            if (safetyTip.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ error: 'You do not have permission to update this safety tip' });
            }

            safetyTip.tip = tip;
            await safetyTip.save();
            res.status(200).json(safetyTip);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete a safety tip
    deleteSafetyTip: async (req, res) => {
        try {
            const { id } = req.params;
            const safetyTip = await SafetyTip.findById(id);

            if (!safetyTip) {
                return res.status(404).json({ error: 'Safety tip not found' });
            }

            if (safetyTip.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ error: 'You do not have permission to delete this safety tip' });
            }

            await SafetyTip.findByIdAndRemove(id);
            res.status(200).json({ message: 'Safety tip deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = SafetyTipController;
