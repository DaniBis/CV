import './App.css';
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={ <Contact />} />
      </Routes>
    </div>
  );
}

export default App;
