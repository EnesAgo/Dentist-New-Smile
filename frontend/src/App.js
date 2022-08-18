import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import './css/style.css';

import { 
  
  HashRouter as TopRouter,
  Routes,
  Route

 } from 'react-router-dom';
import AboutUS from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import InstagramPosts from "./pages/Instagram Posts/InstagramPosts";

function App() {
  return (
    <div className="App">

      <TopRouter>

          <Header />

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<AboutUS />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/posts" element={<InstagramPosts />} />


        </Routes>

          <Footer />
          
      </TopRouter>


    </div>
  );
}

export default App;
