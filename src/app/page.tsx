"use client"
import React from 'react';
import "./styles/App.css";
import Navigator from "./components/Navigator";
import Projects from "./components/Projects";
import Fun from "./components/Fun";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import WAI from "./components/WAI";
// import Game from "./BananaBedlam/components/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='nav_wrapper'>
          <Navigator />   
        </div>
        <div className='router_wrapped'>
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/fun"  element={<Fun />} />
            <Route path="/projects"  element={<Projects />} />
            <Route path="/about"  element={<About />} />
            <Route path="/FAQ"  element={<FAQ />} />
            <Route path="/WAI"  element={<WAI />} />
            {/* <Route path="/Game"  element={<Game />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;