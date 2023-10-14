const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
        required: true,
    },
    recurring: String, 
    specialEvents: [String], 
}, {
    timestamps: true,
});

module.exports = mongoose.model('Event', eventSchema);
