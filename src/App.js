import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from '../src/pages/Potfolio.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" exact Component={Portfolio} />
      <Route path="/Home" exact Component={Home} />
      <Route path="/Contact" exact Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
