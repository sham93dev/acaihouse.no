import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import HomeBannerProductSetup from './components/page-section/home/HomeBannerProductSetup';

function App() {
  return (
    <Router>
      <NavbarTop />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkt/:slug" element={<HomeBannerProductSetup />} /> 
      </Routes>
    </Router>
  );
}

export default App;
