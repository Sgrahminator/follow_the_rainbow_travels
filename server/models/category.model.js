const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 150, // Limiting the name length for consistency and readability
        trim: true, // Remove any whitespace before or after the input
        enum: ['Accommodations', 'Bars/Nightlife', 'Cruises', 'Events', 'Restaurants', 'Shopping', 'Vacations/Adventures'], // Defining allowed values
    },
    locations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
    }],
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory', 
    }],
}, {
    timestamps: true, 
});

// Adding an index to the name field for faster query performance
categorySchema.index({ name: 1 });

module.exports = mongoose.model('Category', categorySchema);




