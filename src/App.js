import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarTop from './components/layout/NavbarTop';
import NavbarComponent from './components/layout/Navbar';
import Home from './pages/Home';
import ProductDetails from './components/product/ProductDetails'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarTop />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produkt/:slug" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
