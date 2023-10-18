const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    categoryOf: { // Describing the type of category this type belongs to.
        type: String,
        enum: ['Accommodations', 'Cruises', 'Events', 'Bars/Nightlife', 'Restaurant','Shopping', 'Vacations/Adventures'], // Enum to limit the types of categories
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Type', typeSchema);


