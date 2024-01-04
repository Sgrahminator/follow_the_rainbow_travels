const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 255,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    address: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000,
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
    ratings: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        rating: {
            type: Number,
            min: 1,
            max: 7,
        },
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Making user reference required to ensure every submission is associated with a user
    },
}, {
    timestamps: true,
});

// Indexing for better search performance
submissionSchema.index({ name: 1, categories: 1 });
submissionSchema.index({ isLGBTQIAOwned: 1, isLGBTQIAFriendly: 1 });

module.exports = mongoose.model('Submission', submissionSchema);


