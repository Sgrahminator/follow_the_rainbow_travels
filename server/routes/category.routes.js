const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

// Require authentication for all routes in this file
const { requireAuth } = require('../middleware/authMiddleware');

// Get a list of all categories, accessible only to authenticated users
router.get('/categories', requireAuth, CategoryController.getAllCategories);

// Get details of a specific category, accessible only to authenticated users
router.get('/category/:id', requireAuth, CategoryController.getCategoryById);

module.exports = router;

