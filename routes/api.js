const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');

// Example route to get all projects

router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
module.exports = router;
