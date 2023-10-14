const mongoose = require('mongoose');

const allypostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    images: [String],
}, {
    timestamps: true, 
});

module.exports = mongoose.model('AllyPost', allypostSchema);
