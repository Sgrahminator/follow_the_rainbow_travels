const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Type', typeSchema);

