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

function App() {
  return (
    <div className="App">

      <TopRouter>

          <Header />

        <Routes>

            <Route path="/" element={<Home />} />

        </Routes>

          <Footer />
          
      </TopRouter>


    </div>
  );
}

export default App;
