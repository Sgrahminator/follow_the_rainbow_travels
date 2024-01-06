const express = require('express');
const router = express.Router();
const locationController = require('./location.controller');

// For creating a new location
router.post('/locations', locationController.createLocation);

// For retrieving all locations
router.get('/locations', locationController.getAllLocations);

// For retrieving a single location by ID
router.get('/locations/:id', locationController.getLocationById);

// For updating a location by ID
router.put('/locations/:id', locationController.updateLocation);

// For deleting a location by ID
router.delete('/locations/:id', locationController.deleteLocation);

module.exports = router;
