const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Example route to get all projects
router.get('/projects', projectController.getAllProjects);

module.exports = router;
