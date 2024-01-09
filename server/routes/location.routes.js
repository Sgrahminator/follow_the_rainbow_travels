const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/location.controller'); 

// Retrieve all locations
router.get('/locations', LocationController.getAllLocations);

// Retrieve a single location by ID
router.get('/locations/:id', LocationController.getLocationById);

module.exports = router;

