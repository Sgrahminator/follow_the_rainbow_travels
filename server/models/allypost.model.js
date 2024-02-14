const mongoose = require('mongoose');

const allypostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        maxlength: [1000, 'Content is too long'],
        default: '' 
    },
    images: [{
        type: String, 
    }],
}, {
    timestamps: true,
});

// Indexing the user field for better query performance
allypostSchema.index({ user: 1 });

module.exports = mongoose.model('AllyPost', allypostSchema);


