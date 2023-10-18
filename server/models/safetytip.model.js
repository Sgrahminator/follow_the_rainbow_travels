const mongoose = require('mongoose');

const safetytipSchema = new mongoose.Schema({
    tip: {
        type: String,
        required: true,
        trim: true, // Remove extra white spaces at the beginning and the end of the tip
        minlength: 10, // Ensure the tip has a meaningful length
        maxlength: 1000, // Limit the tip length to ensure data consistency and quality
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Making user reference required to ensure every tip is associated with a user
    },
}, {
    timestamps: true, 
});

// Adding indexing for better query performance
safetytipSchema.index({ user: 1 });

module.exports = mongoose.model('SafetyTip', safetytipSchema);

