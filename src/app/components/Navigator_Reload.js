"use client";
import React from 'react';
import '../styles/Navigator.css';
import { Tooltip } from "@nextui-org/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import Link from "next/link";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function Navigator() {
  return (
    <div className="nav">
      <div className="left">
        <Tooltip showArrow={true} content="oneyay illionmay eersbay easeplay!">
          <Image src={'/assets/killroy.svg'} alt="dd" width={40} height={40} />
        </Tooltip>
      </div>
      <div className="middle">
        <div className='left1'> 
          {/* Corrected Links without <a> tags */}
      
        <Link href="/#home"> 
          <div className='l' onClick={() => scrollToSection('home')}>Home</div>
        </Link>
        <Link href="/#about">
        <div className='l' onClick={() => scrollToSection('about')}>About</div>
        </Link>
        </div>
        <div className='right1'>
          <Link href="/#projects">
          <div className="l" onClick={() => scrollToSection('projects')}>Projects</div>
          </Link>
        
        <Link href="/#fun"> 
          <div className="l" onClick={() => scrollToSection('fun')}>Fun</div>
          </Link>
         
          {/* <Link href="/Game">Nanner</Link> */}
        </div>
      </div>
      <div className='right'>
        <Link href="https://linkedin.com/in/chrisparvankin">
          <LinkedInIcon className="iconL" />
        </Link>
        <a href="mailto:christopher_parvankin@brown.edu">
          <EmailIcon className="iconE" />
        </a> 
        <Link href="https://github.com/christopherparvankin">
          <GitHubIcon className="iconG" />
        </Link>
      </div>
    </div>
  );
}

export default Navigator;
