// Home.js

import React from 'react';
import '../assests/Home.css'; // Import your styles
import pic from '../assests/ss.jpg'



const Home = () => {
  return (
    <section className="home" id="home">
      <div className="intro">
        <div className="left-section">
          <div className="profile-image">
            <img src={pic} alt="Your Name" />
          </div>
        </div>
        <div className="right-section">
          <div className="intro-text">
            <h2>Hello, I'm</h2>
            <h1>Your Name</h1>
          </div>
          <div className="buttons">
            <a href="path_to_your_cv.pdf" download>
              <button className="cv-button">Download CV</button>
            </a>
            <a href="#contact">
              <button className="contact-button">Contact</button>
            </a>
          </div>
          <div className="contact-info">
            {/* Add contact icons here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

