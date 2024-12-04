import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import MyProducts from './pages/My Products/MyProducts';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import Footer1 from './Components/Footer1/Footer1';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/My Products" element={<MyProducts />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer1 />
      <ScrollToTopButton />
    </div>
  );
};

export default App;

