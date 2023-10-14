const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
        required: true,
    },
    isLGBTQIAOwned: Boolean,
    isLGBTQIAFriendly: Boolean,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Shop', shopSchema);
