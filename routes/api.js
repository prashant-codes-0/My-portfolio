const express = require('express');
const router = express.Router();
const projectController = require('../controller/projectController');
const middlewares = require('../middlewares/middleware');
// Example route to get all projects

router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
router.post('/projects', projectController.deleteProject);
router.post('/projects', projectController.updateProject);






module.exports = router;
