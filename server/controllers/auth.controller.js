const User = require('../models/user.model');
const passport = require('passport');

const AuthController = {
    registerUser: async (req, res) => {
        console.log(req.body);
        try {
            const { name, username, pronouns, membershipType, email, password, confirmPassword } = req.body;

            // Check for existing user
            const existingUser = await User.findOne({ $or: [{ email }, { username }] });
            if (existingUser) {
                return res.status(400).json({ message: 'Email or username already exists' });
            }

            // Create a new user
            const newUser = new User({
                name,
                username,
                pronouns,
                membershipType,
                email,
                password,
                confirmPassword,
            });

            await newUser.save();
            res.status(201).json({ message: 'User registered successfully', newUser });
        } catch (error) {
            console.error("Registration Error: ", error); 
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    },

    loginUser: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) return next(err);
            if (!user) return res.status(400).json({ message: info.message });

            req.logIn(user, (err) => {
                if (err) return next(err);
                res.status(200).json({ message: 'Logged in successfully', user });
            });
        })(req, res, next);
    },

    logoutUser: (req, res) => {
        req.logout();
        res.status(200).json({ message: 'Logged out successfully' });
    },

    getAuthenticatedUser: (req, res) => {
        res.status(200).json({ user: req.user });
    }
};

module.exports = AuthController;
