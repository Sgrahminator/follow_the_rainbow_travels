const mongoose = require('mongoose');

const cruiseLineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removes any whitespace
    },
    regions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
        required: true, // Ensures a region is always associated with a cruise line
    }],
    specialFeatures: [{
        type: String,
        trim: true, // Removes any whitespace and ensures neat formatting
    }], 
}, {
    timestamps: true,
});

// Adding an index on the name field for improved query performance
cruiseLineSchema.index({ name: 1 });

module.exports = mongoose.model('CruiseLine', cruiseLineSchema);

