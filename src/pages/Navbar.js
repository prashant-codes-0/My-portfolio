import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className='navbar '>
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
