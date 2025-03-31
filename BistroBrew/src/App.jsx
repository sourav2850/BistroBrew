import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Car from './components/Car.jsx';
import Coffee from './components/Coffee.jsx';
import Party from './components/Party.jsx';
import Feedback from './components/Feedback.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/pages/Home.jsx';
import Menu from './components/pages/Menu.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import FoodSlider from './components/FoodSlider';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const location = useLocation(); // Get current route

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      {/* Show FoodSlider and Feedback only on the Home page */}
      {location.pathname === "/" && (
        <>
          <Car />
          <Coffee />
          <FoodSlider />
          <Party />
          <Feedback />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;




