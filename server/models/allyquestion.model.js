const mongoose = require('mongoose');

const allyquestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question cannot be empty'],
        minlength: [10, 'Question is too short'],
        maxlength: [1000, 'Question is too long'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User reference is required'],
    },
    answers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User reference is required'],
        },
        answer: {
            type: String,
            required: [true, 'Answer cannot be empty'],
            minlength: [1, 'Answer is too short'],
            maxlength: [1000, 'Answer is too long'],
        },
    }],
}, {
    timestamps: true,
});

// Indexing based on my query needs - others may need to be added
allyquestionSchema.index({ 'user': 1 });

module.exports = mongoose.model('AllyQuestion', allyquestionSchema);

