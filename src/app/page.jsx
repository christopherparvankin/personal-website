"use client";
import React, { useRef, useEffect } from "react";
import "./styles/Home.css";
import About from "./about/page";
import { TracingBeam } from "./components/ui/tracing-beam";
import Navigator from "./components/Navigator";
import { WavyBackground } from "./components/ui/WavyBackground";
import Projects from "./projects/page";
import Fun from "../app/fun/page";
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
    <div className="home">
      <Navigator />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="fun">
        <Fun />
      </div>
    </div>
  );
}

export default Home;
