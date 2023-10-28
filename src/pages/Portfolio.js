import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css'; // Make sure to create this CSS file

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from your API or data source
    axios.get('localhost:3999/api/projects')
      .then((response) => {
        setProjects(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="project-slider">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              {/* <img src={project.screenshotUrls[0]} alt={project.title} /> */}
              <p>Project ID: {project._id}</p>
              <p>Project Title: {project.title}</p>
              {/* You can add project details like title, description, links, etc. */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
