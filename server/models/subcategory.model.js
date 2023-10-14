const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    locations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location', 
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Subcategory', subcategorySchema);

