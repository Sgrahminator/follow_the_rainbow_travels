const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

module.exports = function(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email }).select('+password');
                if (!user) {
                    console.log('User not found'); // Logging added here
                    return done(null, false, { message: 'Invalid email or password.' });
                }
                
                const isMatch = await user.comparePassword(password);
                if (!isMatch) {
                    console.log('Password does not match'); // Logging added here
                    return done(null, false, { message: 'Invalid email or password.' });
                }
                
                return done(null, user);
            } catch (error) {
                return done(error);
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};




