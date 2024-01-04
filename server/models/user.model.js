const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        trim: true,
    },
    pronouns: {
        type: String,
        enum: ['He/Him', 'She/Her', 'They/Them', 'He/They', 'She/They', 'Other'],
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
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
    profileImage: String,
    description: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});

// Virtual for confirmPassword
userSchema.virtual('confirmPassword')
    .get(function() {
        return this._confirmPassword;
    })
    .set(function(value) {
        this._confirmPassword = value;
    });

// Middleware for custom validation
userSchema.pre('validate', function(next) {
    if (this.password !== this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password and Confirm Password must match');
    }
    next();
});

// Middleware to hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);






