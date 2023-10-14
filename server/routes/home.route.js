const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Retrieve top-reviewed submissions, top reviewers, and newest additions
router.get('/', homeController.getHomePageData);

module.exports = router;
