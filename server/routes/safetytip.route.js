const express = require('express');
const router = express.Router();
const SafetyTipController = require('../controllers/safetytip.controller');

// Require authentication for routes related to safety tips
const { requireAuth } = require('../middleware/authMiddleware');

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Get a list of safety tips
router.get('/safetytips', SafetyTipController.getAllSafetyTips);

// Create a new safety tip
router.post('/safetytips', SafetyTipController.createSafetyTip);

// Get details of a specific safety tip
router.get('/safetytip/:id', SafetyTipController.getSafetyTipById);

module.exports = router;

