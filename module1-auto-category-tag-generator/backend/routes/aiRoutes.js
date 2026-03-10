const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// Route for generation
router.post('/generate-category', aiController.generateAndSaveCategory);

// Route for fetching history
router.get('/history', aiController.getHistory);

module.exports = router;
