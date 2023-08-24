const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  screenshotUrls: [String], // Array of image URLs
  // Other project fields...
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
