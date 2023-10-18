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
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
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

// Indexing name for better search performance
submissionSchema.index({ name: 1 });

module.exports = mongoose.model('Submission', submissionSchema);


