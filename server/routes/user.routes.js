const express = require('express');
const router = express.Router();
const multer = require('multer');
const UserController = require('../controllers/user.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Configure Multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/uploads'); // Path to your uploads directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
    }
});

const upload = multer({ storage: storage });

// Apply authentication middleware to relevant routes
router.use(requireAuth);

// Get a user's own profile (Authenticated user's profile)
router.get('/profile', UserController.getUserProfile);

// Update the authenticated user's profile
router.put('/profile', UserController.updateUserProfile);

// Route for uploading profile image
router.post('/upload', upload.single('profileImage'), UserController.handleProfileImageUpload);

// Delete the authenticated user's profile
router.delete('/profile', UserController.deleteUserProfile);

// Get another user's profile (public view)
router.get('/profile/:id', UserController.getOtherUserProfile);

module.exports = router;
