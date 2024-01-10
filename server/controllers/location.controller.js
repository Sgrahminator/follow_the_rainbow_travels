const Location = require('../models/location.model'); 

const LocationController = {
    getAllLocations: async (req, res) => {
        try {
            const locations = await Location.find();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ message: "Error fetching locations: " + error.message });
        }
    },

    getLocationByNameAndType: async (req, res) => {
        try {
            const { name, type } = req.params; 
            const location = await Location.findOne({ name, type });
            if (!location) {
                return res.status(404).json({ message: 'Location not found' });
            }
            res.status(200).json(location);
        } catch (error) {
            res.status(500).json({ message: "Error fetching location: " + error.message });
        }
    }
};

module.exports = LocationController;
