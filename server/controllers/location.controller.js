const Location = require('./location.model'); 

const LocationController = {
    getAllLocations: async (req, res) => {
        try {
            const locations = await Location.find();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ message: "Error fetching locations: " + error.message });
        }
    },

    getLocationById: async (req, res) => {
        try {
            const location = await Location.findById(req.params.id);
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
