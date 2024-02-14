const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const app = express();

// CORS configuration for security and correct credentials handling
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // expires in 24 hours
        httpOnly: true,
        secure:false, 
        sameSite: 'lax'
    }
}));

// Passport configuration
require('./config/passport.config')(passport);
app.use(passport.initialize());
app.use(passport.session());

require('./config/mongoose.config');

// Serve static files 
app.use('/uploads', express.static('uploads'));
app.use('/images', express.static('public/images'));


// Route handling
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const allyPostRoutes = require('./routes/allypost.routes');
const allyQuestionAnswerRoutes = require('./routes/allyquestionanswer.routes');
const categoryRoutes = require('./routes/category.routes');
const locationRoutes = require('./routes/location.routes');
const reviewRoutes = require('./routes/review.routes');
const safetyTipRoutes = require('./routes/safetytip.routes');
const submissionRoutes = require('./routes/submission.routes');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/allypost', allyPostRoutes);
app.use('/allyquestionanswer', allyQuestionAnswerRoutes);
app.use('/category', categoryRoutes);
app.use('/location', locationRoutes);
app.use('/review', reviewRoutes);
app.use('/safetytips', safetyTipRoutes);
app.use('/submission', submissionRoutes);

app.listen(8000, () => {console.log("Listening at Port 8000");});
