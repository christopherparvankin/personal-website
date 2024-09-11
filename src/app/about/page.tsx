"use client";
import React, { useState } from "react";
import "./About.css";
import { Button } from "@nextui-org/react";
import StandardImageList from "./ImageList";

const Pig = () => {
  const p1 = "Ellohay , i'myay Ischray.";
  const p2 = "Ownay atyay ownbray , i'myay udyingstay appliedyay ath-computermay iencescay.";
  const p4 = "Inyay ymay arespay imetay , iyay enjoyyay atchingway oviesmay , oinggay onyay ikebay idesray , andyay erusingpay acebookfay arketplacemay!";
  const p5 = "Eforebay ollegecay , iyay entspay ayay earyay inyay oderhay islandyay upportingsay ayay ocallay ovidencepray ublicpay oolschay oughthray itycay earyay ovidencepray.";
  const p6 = "Erehay areyay omesay otosphay ofyay ymay ifelay!";

  return (
    <div className="description">
      <div className="biop">{p1}</div>
      <div className="biop">{p5}</div>
      <div className="biop">{p2}</div>
      <div className="biop">{p4}</div>
      <div className="biop">{p6}</div>
    </div>
  );
}

const English = () => {
  const p1 = "Hello, I'm Chris.";
  const p2 = "Now at Brown, I'm studying Applied Math-Computer Science.";
  const p4 = "In my spare time, I enjoy watching movies, going on bike rides, and perusing Facebook Marketplace!";
  const p5 = "Before college, I spent a year in Rhode Island supporting a local Providence public school through City Year Providence.";
  const p6 = "Here are some photos of my life!";

  return (
    <div className="description">
      <div className="biop">{p1}</div>
      <div className="biop">{p5}</div>
      <div className="biop">{p2}</div>
      <div className="biop">{p4}</div>
      <div className="biop">{p6}</div>
    </div>
  );
}

function About() {
  const [language, setLanguage] = useState("igpay atinlay");

  const handleLanguageSwitch = () => {
    setLanguage(prevLang => (prevLang === "igpay atinlay" ? "English" : "igpay atinlay"));
  };
  const p1 = "Hello, I'm Chris.";
  const p2 = "Now at Brown, I'm studying Applied Math-Computer Science.";
  const p4 = "In my spare time, I enjoy watching movies, going on bike rides, and perusing Facebook Marketplace!";
  const p5 = "Before college, I spent a year in Rhode Island supporting a local Providence public school through City Year Providence.";
  const p6 = "Here are some photos of my life!";
  return (
    <div className="about_body">
      <div className="about">
        <div className="title_row">
          <div className="top-0">About Me</div>
          <Button 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg top-0"
            onClick={handleLanguageSwitch}
          >
            {language}
          </Button>
        </div>

        {language === "igpay atinlay" ? <English /> : <Pig />}
      
          



          <div className="flex justify-center">  
          <StandardImageList />
        </div>
      </div>
    </div>
  );
}

export default About;
