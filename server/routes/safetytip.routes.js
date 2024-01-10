const express = require('express');
const router = express.Router();
const SafetyTipController = require('../controllers/safetytip.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Get a list of all safety tips
router.get('/safetytip', requireAuth, SafetyTipController.getAllSafetyTip);

// Create a new safety tip
router.post('/safetytip', requireAuth, SafetyTipController.createSafetyTip);

// Get details of a specific safety tip
router.get('/safetytip/byid/:id', requireAuth, SafetyTipController.getSafetyTipById);

// Get all safety tips by a specific user
router.get('/safetytip/byuser/:userId', requireAuth, SafetyTipController.getSafetyTipByUser);

// Update a submission (if they're the authorized user)
router.put('/safetytip/:id', requireAuth, SafetyTipController.updateSafetyTip);

// Delete a submission (if they're the authorized user)
router.delete('/safetytip/:id', requireAuth, SafetyTipController.deleteSafetyTip);

module.exports = router;

