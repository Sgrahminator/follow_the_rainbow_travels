const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

// Get a list of all categories
router.get('/categories', CategoryController.getAllCategories);

// Get details of a specific category
router.get('/category/:id', CategoryController.getCategoryById);


module.exports = router;
