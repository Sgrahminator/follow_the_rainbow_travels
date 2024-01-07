const express = require('express');
const router = express.Router();
const SafetyTipController = require('../controllers/safetytip.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Get a list of all safety tips
router.get('/safetytips', requireAuth,  SafetyTipController.getAllSafetyTips);

// Create a new safety tip
router.post('/safetytips', requireAuth,  SafetyTipController.createSafetyTip);

// Get details of a specific safety tip
router.get('/safetytip/:id', requireAuth,  SafetyTipController.getSafetyTipById);

// Get all safety tips by a specific user
router.get('/user-safetytips/:userId', requireAuth,  SafetyTipController.getSafetyTipByUser);

// Update a submission (if they're the authorized user)
router.put('/safetytip/:id', requireAuth,  SafetyTipController.updateSafetyTip);

// Delete a submission (if they're the authorized user)
router.delete('/safetytip/:id', requireAuth,  SafetyTipController.deleteSafetyTip);

module.exports = router;

