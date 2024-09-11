import React from "react";
import "../styles/Projects.css";

import { BackgroundGradient } from "../components/ui/background-gradient";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";
const BananaBedlam = "/assets/le_monke.png";
const Maze = "/assets/maze.gif";
const Travel = "/assets/travel_planner.jpeg";
const DT = "/assets/decision_tree.png";
const C4 = "/assets/minimax.jpeg";
const Shell = "/assets/shell2.png";
const Database = "/assets/database.png";
const react = "/assets/react.png";

function KeywordBubble({ keyword }) {
  return <div className="keyword_bubble">{keyword}</div>;
}

const Col = ({ title, col, date, text, keywords, github, image }) => {
  var c = col === "leftside" ? "leftside" : "rightside";
  var ce = col === "leftside" ? "pcol_left" : "pcol_right";
  return (
    <div className={c}>
      <div className={ce}>
        <div className="prow_top">
          <div className="ptitle_main">{title}</div>
          <div className="ptitle_date">{date}</div>
        </div>

        <div className="prow_middle">
          <img
            src={image}
            alt="rs"
            className="im" // This will make the image automatically scale
          />

          {text}
        </div>

        <div className="prow_bottom">
          <div className="project_keywords">
            {keywords.map((item, index) => {
              return <KeywordBubble key={index} keyword={item} />;
            })}
          </div>
          {github ? (
            <Link href={github}>
              <GitHubIcon sx={{ fontSize: "2.25vw" }} className="p_IG" />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="pbody">
      <div className="p_title">Personal Projects</div>
      <div className="prow">
        <Col
          title="Personal Website"
          col="leftside"
          date="August 2024"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                <div>I built this personal website with the Next.js framework with a mix of Typescript and JavaScript</div>
                <div style={{ marginTop: "1vw" }}>
                  There is a corresponding backend, using an Express.js server hosted on AWS EC2 with Ubuntu, that is used for the scoreboard of Banana Bedlam.
                  This was my first time dealing with Web Development, and I had
                  a lot of fun learning in the process!
                </div>
  
              </ScrollShadow>
            </div>
          }
          keywords={["NextJS", "TypeScript", "Full-stack Dev"]}
          github="https://github.com/example-repo"
          image={react}
        />

        <Col
          title="Banana Bedlam"
          date="August 2023"
          col="rightside"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                <div>
                  This is a game that I created with the Pygame module. It stars
                  Archibald Bananapeel — the last defender against the
                  encroaching darkness of the evil banana faction.
                </div>

                <div style={{ marginTop: "1vw" }}>
                  This was originally made in Python with the Pygame module, though I eventually rewrote it with Typescript and the Pixi/React library. 
                </div>
               
              </ScrollShadow>
            </div>
          }
          keywords={["Backend", "Typscript"]}
          github="https://github.com/example-repo"
          image={BananaBedlam}
        />
      </div>

      <div className="p_title2"> School Projects</div>

      <div className="prow">
        <Col
          title="Database Server"
          col="leftside"
          date="December 2023"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                Created a server in C containing a database of key-value pairs,
                of which clients could connect to and modify.
                <div style={{ marginTop: "1vw" }}>
                  Implemented database using fine-grain multithreaded
                  architecture, enabling concurrent database use among multiple
                  clients.
                </div>
              </ScrollShadow>
            </div>
          }
          keywords={["C", "Multi-threaded Programming", "Networks"]}
          image={Database}
        />
        <Col
          title="Shell Language"
          col="rightside"
          date="November 2023"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                Developed Shell Scripting Language in C for Unix-based
                environments, allowing for execution of built-in system commands
                and external programs. Supported concurrent execution of
                multiple programs with foreground/background control,
                customizable file input/output redirection, and
                halting/resumption of specific processes. Supported concurrent
                execution of multiple programs with foreground/background
                control, customizable file input/output redirection, and
                halting/resumption of specific processes.
              </ScrollShadow>
            </div>
          }
          keywords={["Unix", "Shell", "Operating Systems"]}
          image={Shell}
        />
      </div>
      <div className="prow">
        <Col
          title="Maze Generator"
          col="leftside"
          date="September 2023"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                Programmed a maze generator and solver application in C, using a
                a Random Walk and Depth First Search algorithm to randomly
                generate a maze and navigate through it, respectively.
              </ScrollShadow>
            </div>
          }
          keywords={["C", "DFS", "Random Walk Algorithm"]}
          image={Maze}
        />

        <Col
          title="Graph Optimizer"
          col="rightside"
          date="April 2023"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                <div>
                  Created a route optimization program in Java, allowing users
                  to choose a route between two cities/nodes with specified
                  criteria — e.g. minimum cost. — based on user-inputted CSV
                  file of city nodes and their edges.{" "}
                </div>

                <div style={{ marginTop: "1vw" }}>
                  Implemented Breadth First Search and Dijkstra’s Algorithm to
                  calculate the optimal route.
                </div>
              </ScrollShadow>
            </div>
          }
          keywords={["Java", "BFS", "DFS", "Dijkstra"]}
          image={Travel}
        />
      </div>
      <div className="prow">
        <Col
          title="Object Predictor"
          col="leftside"
          date="March 2023"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                Programmed a predictive model application in Java that analyzed
                user-provided CSV data files of items and their attributes.
                <div style={{ marginTop: "1vw" }}>
                  Created a method that generates a prediction tree model,
                  allowing program to predict an item’s identity from user-given
                  attributes.
                </div>
              </ScrollShadow>
            </div>
          }
          keywords={["Java", "Machine Learning"]}
          image={DT}
        />
        <Col
          title="AI Connect-4"
          col="rightside"
          date="December 2022"
          text={
            <div className="ptext">
              <ScrollShadow className="w-[450px] h-[200px]">
                Implemented a Connect-4 game in ReasonML with a Text-based User
                Interface that users would operate to play AI player.
                <div className="mt-1">
                  Created a minimax algorithm used by AI to make decisions by
                  analyzing possible outcomes up to a user-defined depth.
                </div>
              </ScrollShadow>
            </div>
          }
          keywords={["ReasonML", "AI", "Minimax Algorithm"]}
          image={C4}
        />
      </div>
    </div>
  );
}

export default Projects;
