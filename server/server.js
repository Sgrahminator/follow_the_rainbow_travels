const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const app = express();

// Updated CORS configuration for security and correct credentials handling
app.use(cors({
    origin: 'http://localhost:3000', // ensure this matches your frontend application's URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: 'your_secret_key', // consider using environment variables for enhanced security
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // expires in 24 hours
        httpOnly: true,
        secure: false, // set to true if your application uses HTTPS
        sameSite: 'lax'
    }
}));

// Passport configuration
require('./config/passport.config')(passport);
app.use(passport.initialize());
app.use(passport.session());

require('./config/mongoose.config');

// Route handling
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});


