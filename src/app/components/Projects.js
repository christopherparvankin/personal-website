import React from "react";
import '../styles/Projects.css';
import ReactSymbol from '../assets/react.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import BananaBedlam from "../assets/le_monke.png"
import Maze from "../assets/maze.gif"
import Travel from "../assets/travel_planner.jpeg"
import DT from "../assets/decision_tree.png"
import C4 from "../assets/minimax.jpeg"
import Shell from "../assets/shell2.png"
import Database from "../assets/database.png"
import { Link } from 'react-router-dom';


function KeywordBubble({ keyword }) {
  return (
    <div className="keyword_bubble">
      {keyword}
    </div>
  );
}

function Projects() {

  return (
    <div className="pbody">
      <div className="p_title">Personal Projects</div>
      <div className="prow">
        <div className="leftside">
          <div className="pcol_left">
            <div className="prow_top">
              <div className="ptitle_main">Personal Website</div>
              <div className="ptitle_date">December 2023</div>
            </div>

            <div 
              className="prow_middle" 
            >
              <img src={ReactSymbol} alt="rs"/>
            
                <div className="ptext">
                  <div>
                    I built this personal website with a React framework.
                  </div>
                  <div style={{marginTop:'1vw'}}>
                    This was my first time dealing with Web Development, and I had a lot of fun learning in the process! 
                  </div>
                </div>
   
            </div>

            <div className="prow_bottom">
              <div className="project_keywords">
                <KeywordBubble keyword="React" />
                <KeywordBubble keyword="HTML" />
                <KeywordBubble keyword="CSS" />
                <KeywordBubble keyword="JavaScript" />
              </div>
              <Link to="https://github.com/christopherparvankin/personal_website">
              <GitHubIcon sx={{ fontSize: '2.25vw' }} className="p_IG"/>
              </Link>
              
            </div>
          </div>
        </div>
    <div className="rightside">

        <div className="pcol_right">

<div className="prow_top">
  <div className="ptitle_main">Banana Bedlam</div>
  <div className="ptitle_date">August 2023</div>
</div>

  

<div className="prow_middle">
<img src={BananaBedlam} alt="rs"/>
<div className="ptext">
<div>
This is a game that I created with the Pygame module. It stars Archibald Bananapeel — the last defender against the encroaching darkness of the evil banana faction.
</div>

<div style={{marginTop:'1vw'}}>
While I'm not at liberty to disclose the specifics, Banana Bedlam 2 will feature the original beloved cast and more. 
</div>
</div>
</div>
  <div className="prow_bottom">
    <div className="project_keywords">
      <KeywordBubble keyword="Python" />
      <KeywordBubble keyword="Pygame" />
      <KeywordBubble keyword="UI" />
    </div>
    <Link to="https://github.com/christopherparvankin/Banana-Bedlam-">
    <GitHubIcon sx={{ fontSize: '2.25vw' }} className="p_IG"/>
    </Link> 
  </div>
          </div>
        </div>
      </div>


      <div className="p_title" > 
        School Projects
      </div>


      <div className="prow">

      
      <div className="leftside">
      <div className="pcol_left">
      <div className="prow_top">
        <div className="ptitle_main">Database Server</div>
        <div className="ptitle_date">December 2023</div>
      </div>
      
        
   
      <div className="prow_middle">
  <img src={Database} alt="rs"/>
  <div className="ptext">
    Created a server in C containing a database of key-value pairs, of which clients could connect to and modify.
    <div style={{marginTop:'1vw'}}>
    Implemented database using fine-grain multithreaded architecture, enabling concurrent database use among multiple clients. 
    </div>
  </div>
</div>
        <div className="prow_bottom">
          <div className="project_keywords">
            <KeywordBubble keyword="C" />
            <KeywordBubble keyword="Multi-threaded Programming" />
            <KeywordBubble keyword="Networks" />
          </div>

        </div>
      </div>
      </div>
      <div className="rightside">
      <div className="pcol_right">

      <div className="prow_top">
        <div style={{ fontSize: '1.5vw', fontWeight:'bolder'}}>Shell Language</div>
        <div style={{ fontSize: '1.3vw', fontWeight:'italic'}}>November 2023</div>
      </div>
      
        
   
      <div className="prow_middle">
  <img src={Shell} alt="rs"/>
  <div className="ptext">
    <div>
    Developed Shell Scripting Language in C for Unix-based environments, allowing for execution of built-in system commands and external programs.


    <div style={{marginTop:'1vw'}}>
    Supported concurrent execution of multiple programs with foreground/background control, customizable file input/output redirection, and halting/resumption of specific processes.
    </div>



   
    </div>

    <div style={{marginTop:'1vw'}}>
    </div>
  </div>
</div>
        <div className="prow_bottom">
          <div className="project_keywords">
            <KeywordBubble keyword="Unix" />
            <KeywordBubble keyword="Processes" />
            <KeywordBubble keyword="Signals" />
            
          </div>

        </div>
      </div>
      </div>
      </div>

      <div className="prow">
      <div className="leftside">
      <div className="pcol_left">

      <div className="prow_top">
        <div style={{ fontSize: '1.5vw', fontWeight:'bolder'}}>Maze Generator & Solver</div>
        <div style={{ fontSize: '1.3vw', fontWeight:'italic'}}>September 2023</div>
      </div>
      
        
   
      <div className="prow_middle">
  <img src={Maze} alt="rs"/>
  <div className="ptext">
    <div>
    Programmed a maze generator and solver application in C, 
    using a a Random Walk and Depth First Search algorithm to 
    randomly generate a maze and navigate through it, respectively.
   
    </div>

    <div style={{marginTop:'1vw'}}>
    </div>
  </div>
</div>
        <div className="prow_bottom">
          <div className="project_keywords">
            <KeywordBubble keyword="C" />
            <KeywordBubble keyword="Depth First Search" />
            <KeywordBubble keyword="Random Walk" />
            
          </div>

        </div>
      </div>
      </div>
      

      <div className="rightside">

      
      <div className="pcol_right">

      <div className="prow_top">
        <div className="ptitle_main">Travel Optimizer</div>
        <div className="ptitle_date">April 2023</div>
      </div>
      
        
   
      <div className="prow_middle">
  <img src={Travel} alt="rs"/>
  <div className="ptext">
    <div>
    Created a route optimization program in Java, 
    allowing users to choose a route between two cities with specified criteria — e.g. minimum cost. — based on user-inputted CSV file of city nodes and their edges. </div>

    <div style={{marginTop:'1vw'}}>
    Implemented Breadth First Search and Dijkstra’s Algorithm to calculate the optimal route.
    </div>
  </div>
</div>
        <div className="prow_bottom">
          <div className="project_keywords">
            <KeywordBubble keyword="Java" />
            <KeywordBubble keyword="BFS" />
            <KeywordBubble keyword="Dijkstra" />
            <KeywordBubble keyword="Graphs" />
            
          </div>

        </div>
      </div>
      </div>
      </div>


    <div className="prow">
    <div className="leftside">
      <div className="pcol_left">

<div className="prow_top">
  <div className="ptitle_main">Decision Tree</div>
  <div className="ptitle_date">March 2023</div>
</div>

  

<div className="prow_middle">
<img src={DT} alt="rs"/>
<div className="ptext">
<div>
Programmed a predictive model application in Java that analyzed user-provided CSV data files of items and their attributes.
<div style={{marginTop:'1vw'}}>
Created a method that generates a prediction tree model, allowing program to predict an item’s identity from user-given attributes.</div>
</div>
</div>
</div>
  <div className="prow_bottom">
    <div className="project_keywords">
      <KeywordBubble keyword="Java" />
      <KeywordBubble keyword="Machine Learning" />
      
    </div>

  </div>
</div>
</div>
<div className="rightside"> 
<div className="pcol_right">

<div className="prow_top">
  <div className="ptitle_main">AI Connect-4</div>
  <div className="ptitle_date">December 2022</div>
</div>

  

<div className="prow_middle">
<img src={C4} alt="rs"/>
<div className="ptext">
<div>
Implemented a Connect-4 game in ReasonML with a Text-based User Interface that users would operate to play AI player.
<div style={{marginTop:'1vw'}}>
Created a minimax algorithm used by AI to make decisions by analyzing possible outcomes up to a user-defined depth.
</div>
</div>
</div>
</div>
  <div className="prow_bottom">
    <div className="project_keywords">
      <KeywordBubble keyword="ReasonML" />
      <KeywordBubble keyword="AI" />
      <KeywordBubble keyword="Minimax" />
      
    </div>

    </div>


    </div>
    </div>
    
    </div>
    </div>
  );
}

export default Projects;
