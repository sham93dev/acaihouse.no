import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavbarTop />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
