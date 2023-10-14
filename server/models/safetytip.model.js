const mongoose = require('mongoose');

const safetytipSchema = new mongoose.Schema({
    tip: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model('SafetyTip', safetytipSchema);
