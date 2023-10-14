const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

exports.registerUser = async (req, res) => {
    try {
        const { name, username, pronouns, membershipType, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            username,
            pronouns,
            membershipType,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', newUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.loginUser = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json({ message: info.message });

        req.logIn(user, (err) => {
            if (err) return next(err);
            res.status(200).json({ message: 'Logged in successfully', user });
        });
    })(req, res, next);
};

exports.logoutUser = (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logged out successfully' });
};

exports.getAuthenticatedUser = (req, res) => {
    res.status(200).json({ user: req.user });
};
