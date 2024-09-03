import React from "react";
import '../styles/Fun.css';
import { Link } from "react-router-dom";
import FAQBackground from "../assets/background.jpg"
import Outline from "../assets/AI_head.jpeg"
import Image from 'next/image';
<Link to="/FAQ" className="fun_slot" style={{backgroundImage:`url(${FAQBackground})`, fontFamily:'fantasy'}} >
        
        FAQ
      
      </Link>
function Fun() {
  return (
    <div className="f">
      <div className="row">
        <div className="col">
        <Link href="/FAQ" className="fun_slot" style={{backgroundImage:`url(${FAQBackground})`, fontFamily:'fantasy'}} >
        
            FAQ

          </Link>
        </div>
        <div className="col">
        <Link to="/WAI" className="fun_slot" style={{backgroundImage:`url(${Outline})`, fontFamily:'cursive', fontSize:'3vw'}} >
        
        Who Am I
    
      </Link>
        </div>
      </div>
      
      

    </div>

  );
}

export default Fun;
