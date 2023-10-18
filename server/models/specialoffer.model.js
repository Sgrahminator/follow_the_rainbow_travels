const mongoose = require('mongoose');

const specialofferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removes extra whitespaces
        minlength: 2, // Ensuring the name has a meaningful length
        maxlength: 255, // Limiting the name length for consistent data
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true, // Ensuring that each offer has at least one category
    }],
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        // The subcategories field is optional and can be left out if not applicable
    }],
}, {
    timestamps: true,
});

// Adding indexing for better query performance
specialofferSchema.index({ name: 1 });
specialofferSchema.index({ categories: 1 });
specialofferSchema.index({ subcategories: 1 });

module.exports = mongoose.model('SpecialOffer', specialofferSchema);

