const mongoose = require('mongoose');

const urlValidator = function(v) {
    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(v);
};

const submissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 255,
    },
    categories: [{
        type: String, 
        ref: 'Category', 
    }],
    address: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    location: {
        type: String, 
        ref: 'Location', 
        required: true,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000,
    },
    photos: [{
        type: String,
        validate: [urlValidator, 'Invalid URL']
    }],
    isLGBTQIAOwned: {
        type: String,
        enum: ['Yes', 'No', 'Not Sure'],
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true, 
        min: 1,
        max: 7,
    },
}, {
    timestamps: true,
});

submissionSchema.index({ name: 1, categories: 1 });
submissionSchema.index({ isLGBTQIAOwned: 1, isLGBTQIAFriendly: 1 });

module.exports = mongoose.model('Submission', submissionSchema);
