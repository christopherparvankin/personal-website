import React from "react";
import { Link, Element } from "react-scroll";
import "./styles/App.css";
import Navigator from "./components/Navigator";
import Projects from "./projects/page";
import Shaun from "./components/Shaun";
import Fun from "./fun/page";
import Home from "./page";
import About from "./about/page";
import FAQ from "./components/FAQ";
import WAI from "./components/WAI";
import Game from "./BananaBedlam/components/Game";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav_wrapper">
          <Navigator />
        </div>
        <div className="router_wrapped">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/fun" exact element={<Fun />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/Shaun" exact element={<Shaun />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/FAQ" exact element={<FAQ />} />
            <Route path="/WAI" exact element={<WAI />} />
            <Route path="/Game" exact element={<Game />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
