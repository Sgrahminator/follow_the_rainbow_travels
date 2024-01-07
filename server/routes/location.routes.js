const express = require('express');
const router = express.Router();
const LocationController = require('./location.controller'); 

// Create a new location
router.post('/locations', LocationController.createLocation);

// Retrieve all locations
router.get('/locations', LocationController.getAllLocations);

// Retrieve a single location by ID
router.get('/locations/:id', LocationController.getLocationById);

// Update a location by ID
router.put('/locations/:id', LocationController.updateLocation);

// Delete a location by ID
router.delete('/locations/:id', LocationController.deleteLocation);

module.exports = router;

