const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removes any whitespace
    },
    type: {
        type: String,
        enum: ['Country', 'City', 'Region', 'State', 'Province', 'Territory'],
        required: true,
    },
});

// Adding an index on the name field for improved query performance
locationSchema.index({ name: 1, type: 1 }); 

module.exports = mongoose.model('Location', locationSchema);
