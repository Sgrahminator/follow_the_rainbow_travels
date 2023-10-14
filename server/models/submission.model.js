const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    }],
    address: String,
    description: String,
    photos: [String],
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
}, {
    timestamps: true,
});

module.exports = mongoose.model('Submission', submissionSchema);

