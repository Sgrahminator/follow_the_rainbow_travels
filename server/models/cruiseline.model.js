const mongoose = require('mongoose');

const cruiseLineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    regions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
    }],
    specialFeatures: [String], 
}, {
    timestamps: true,
});

module.exports = mongoose.model('CruiseLine', cruiseLineSchema);
