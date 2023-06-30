import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Best from './Best.js';
import Home from './Home.js';
import Detail1 from './Detail1.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/best" element={<Best />} />
        <Route path='/detail1' element={<Detail1/>} />
      </Routes>
    </Router>
  );
}

export default App;
