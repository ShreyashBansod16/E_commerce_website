import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banner/Banner";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from "./components/Navpage/Product";
import About from "./components/Navpage/About";
import Shop from "./components/Navpage/Shop";
import Contacts from "./components/Navpage/Contacts";

// Home component to render on the root ("/") route
const Home = () => {
  return (
    <>
      <Hero />
      <Menus />
      <Banner />
    </>
  );
};

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/contacts" element={<Contacts />} /> 
        </Routes>
      </Router>
    </main>
  );
};

export default App;
