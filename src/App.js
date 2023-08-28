import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from '../src/pages/Potfolio.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Navbar from './pages/Navbar.js';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      
      <Route path="/port" exact Component={Portfolio} />
      <Route path="/" exact Component={Home} />
      <Route path="/Contact" exact Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
