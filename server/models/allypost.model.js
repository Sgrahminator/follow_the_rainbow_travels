const mongoose = require('mongoose');
const validator = require('validator');

const allypostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: [true, 'Content cannot be empty'],
        minlength: [10, 'Content is too short'],
        maxlength: [1000, 'Content is too long'],
    },
    images: [{
        type: String,
        validate: {
            validator: function(value) {
                return validator.isURL(value, { require_protocol: true });
            },
            message: props => `${props.value} is not a valid URL`
        }
    }],
}, {
    timestamps: true,
});

// Indexing the user field for better query performance
allypostSchema.index({ user: 1 });

module.exports = mongoose.model('AllyPost', allypostSchema);

