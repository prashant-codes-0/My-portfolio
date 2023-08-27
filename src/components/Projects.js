import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const apiUrl = 'http://localhost:3999/api/projects'

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.screenshotUrls.map(url => (
                <img key={url} src={url} alt={`Screenshot of ${project.title}`} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
