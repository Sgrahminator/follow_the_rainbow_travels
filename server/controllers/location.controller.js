const Location = require('./location.model');

exports.createLocation = async (req, res) => {
    try {
        const newLocation = new Location(req.body);
        const savedLocation = await newLocation.save();
        res.status(201).json(savedLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) return res.status(404).json({ message: 'Location not found' });
        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateLocation = async (req, res) => {
    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLocation) return res.status(404).json({ message: 'Location not found' });
        res.status(200).json(updatedLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteLocation = async (req, res) => {
    try {
        const location = await Location.findByIdAndDelete(req.params.id);
        if (!location) return res.status(404).json({ message: 'Location not found' });
        res.status(200).json({ message: 'Location deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = LocationController;