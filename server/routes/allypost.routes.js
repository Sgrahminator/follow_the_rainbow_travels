const express = require('express');
const router = express.Router();
const multer = require('multer');
const AllyPostController = require('../controllers/allypost.controller');
const { requireAuth } = require('../middleware/authMiddleware');

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Files will be saved in the 'uploads' directory
    },
    filename: function(req, file, cb) {
        // Name files with the current date and original name to avoid name conflicts
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Create a new post 
router.post('/allypost', requireAuth, upload.single('image'), AllyPostController.createAllyPost);

// Get details of a specific post
router.get('/allypost/:id', requireAuth,  AllyPostController.getAllyPostById);

// Get all allyposts
router.get('/allyposts', requireAuth,  AllyPostController.getAllAllyPosts);

// Get all allyposts by a specific user
router.get('/allyposts/byuser/:userId', requireAuth,  AllyPostController.getAllyPostsByUser);

// Update a allypost (if the authorized user)
router.put('/allypost/:id', requireAuth,  AllyPostController.updateAllyPost);

// Delete a allypost (if the authorized user)
router.delete('/allypost/:id', requireAuth,  AllyPostController.deleteAllyPost);

module.exports = router;