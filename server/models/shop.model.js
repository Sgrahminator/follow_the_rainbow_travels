const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Removing extra whitespaces
        minlength: 3, // Ensuring the shop name has a meaningful length
        maxlength: 255, // Limiting the shop name length for consistent data
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
        required: true,
    },
    isLGBTQIAOwned: {
        type: Boolean,
        required: true, // Making this field required to ensure clarity
        default: false, // Default to false if not provided
    },
    isLGBTQIAFriendly: {
        type: Boolean,
        required: true, // Making this field required to ensure clarity
        default: false, // Default to false if not provided
    },
}, {
    timestamps: true,
});

// Adding indexing for better query performance
shopSchema.index({ location: 1 });
shopSchema.index({ isLGBTQIAOwned: 1, isLGBTQIAFriendly: 1 });

module.exports = mongoose.model('Shop', shopSchema);

