import React from 'react';
import '../assests/Contact.css'; // Import the specific CSS file for Contact

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="content">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-description">
            Have questions or want to work together? Feel free to reach out!
          </p>
          <form className="contact-form">
            <input type="text" className="contact-input" placeholder="Your Name" />
            <input type="email" className="contact-input" placeholder="Your Email" />
            <textarea className="contact-textarea" placeholder="Your Message"></textarea>
            <button type="submit" className="contact-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

