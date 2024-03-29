const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    submission: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Submission',
        required: true, // Making it required to always link a review to a submission
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Making it required to always link a review to a user
    },
    comment: {
        type: String,
        maxlength: 1000, // Set a maximum length for the comment
        trim: true, // Trim whitespaces
    },
    photos: [{
        type: String,
        validate: {
            validator: function(v) {
                return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        },
    }],
    rating: {
        type: Number,
        required: true, // Making rating required
        min: 1,
        max: 7,
    },
}, {
    timestamps: true, 
});

// Adding indexes for improved query performance
reviewSchema.index({ submission: 1, user: 1 });

module.exports = mongoose.model('Review', reviewSchema);
