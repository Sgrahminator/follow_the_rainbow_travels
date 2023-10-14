const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submission',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 7,
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model('Review', reviewSchema);

