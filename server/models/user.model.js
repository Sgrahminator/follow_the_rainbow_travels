const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    pronouns: {
        type: String,
        enum: ['He/Him', 'She/Her', 'They/Them'],
        required: true,
    },
    membershipType: {
        type: String,
        enum: ['LGBTQIA+', 'Ally'],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 8, 
        match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        // Password complexity requirement:
        // - At least one uppercase letter (A-Z)
        // - At least one lowercase letter (a-z)
        // - At least one digit (0-9)
        // - At least one special character (@$!%*#?&)
    },
    profileImage: String,
    description: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
