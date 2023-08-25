const Project = require('../models/Project');

// Get all projects with only necessary fields
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({}, '_id title description screenshotUrls').exec();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch projects' });
  }
};

// Create a new project
exports.createProject = async (req, res) => {
  const { title, description, screenshotUrls } = req.body;

  try {
    const project = await Project.create({
      title,
      description,
      screenshotUrls,
      // Other project fields...
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create project' });
  }
};
