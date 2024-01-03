const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removes whitespace from both ends of a string
        minlength: 2, // Ensures that the name has a meaningful length
        maxlength: 100, // Limits the length of the name to maintain consistency
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
}, {
    timestamps: true,
});

// Indexing the name for better search performance
subcategorySchema.index({ name: 1 });

module.exports = mongoose.model('Subcategory', subcategorySchema);


