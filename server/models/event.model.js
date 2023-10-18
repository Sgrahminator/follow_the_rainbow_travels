const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Trim whitespaces
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
        required: true,
    },
    type: { // Added a type to classify the event
        type: String,
        required: true,
        enum: ['Pride parades', 'Film festivals', 'Concerts'],
    },
    recurring: {
        type: String,
        enum: ['Weekly', 'Monthly', 'Annually'],
    },
    specialEvents: [{
        type: String,
        trim: true, // Trim whitespaces
    }], 
}, {
    timestamps: true,
});

// Adding indexes for improved query performance
eventSchema.index({ name: 1, type: 1 });

module.exports = mongoose.model('Event', eventSchema);

