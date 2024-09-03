import React from "react";
import '../styles/About.css';
import chris from '../assets/chris.JPG'
import a from "../assets/AI_head.jpeg";
import b from "../assets/milk.jpeg";
import c from "../assets/database.png";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const p1 = "Hello, I'm Chris."
const p2 = "Now at Brown, I'm studying Applied Math-Computer Science."
const p3 = "I grew up in a quiet hamlet, about an hour ouside of Portland, Oregon." 
const p4 = "In my spare time, I enjoy watching movies, going on bike rides, and perusing Facebook Marketplace!"
const p5 = "Before college, I spent a year in Rhode Island supporting a local Providence public school through City Year Providence."
 
const itemData = [
  {
    a,
    title: 'Breakfast',
  },
  {
    b,
    title: 'Burger',
  },
  {
    c,
    title: 'Camera',
   }
];

function StandardImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}

    </ImageList>
  );
}

function About() {

  return (
    <div className="about_body">
    <div className="about">
      
        <div className="title_row">
        About Me
        </div>

        <div >
        
    <img src={chris} alt="chris?" style={{ float: 'left', width: '24vw', marginRight: '1vw' }} />
          <div className="description">
           
          </div>
          <div className="biop" >{p1}</div>
          <div className="biop">{p3}</div>
          <div className="biop">{p5}</div>
          <div className="biop" >{p2}</div>
          <div className="biop">{p4}</div>
        </div>
        
    </div>
    <StandardImageList />
    </div>
  );
}

export default About;
