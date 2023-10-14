const mongoose = require('mongoose');

const allyquestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    answers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        answer: String,
    }],
}, {
    timestamps: true, 
});

module.exports = mongoose.model('AllyQuestion', allyquestionSchema);
