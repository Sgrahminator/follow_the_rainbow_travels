const mongoose = require('mongoose');

const specialofferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }],
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('SpecialOffer', specialofferSchema);
