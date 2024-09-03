import React from 'react';
import '../styles/Home.css';
import About from './About';
import { WavyBackground } from './WavyBackground';
import Projects from './Projects';
import Fun from './Fun';
const p1 = "Christopher Parvankin";
const p3 = "AmeriCorps Alumnus | Brown University Student";

function Hero() {
  return (
    <div className="hero grid-container"> 

    
      <div className="wavy-background-container">
        <WavyBackground className="max-w-4xl mx-auto pb-40" />
      </div>
      
      <div className="about-overlay">
        <div className="home-container">
          <div className="l1">{p1}</div>
          <div className="l2">{p3}</div>
        </div>
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className='home'>

    <Hero />
    <About />
    <Projects /> 
    <Fun /> 
    </div>
  )};


export default Home;