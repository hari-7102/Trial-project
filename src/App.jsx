import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Sections/Home';
import About from './Sections/About';
import Pricing from './Sections/Pricing';
import Blog  from './Sections/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;