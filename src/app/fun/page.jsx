"use client"
import React from "react";
import "../styles/Fun.css";
import Link from "next/link";
import { BackgroundGradient } from "../components/ui/background-gradient";
const FAQBackground = "/assets/background.jpg";
const Outline = "/assets/AI_head.jpeg";

function Fun() {
  return (
    <div className="f">
      <div className="pf_title mt-10"> Fun </div>
      <div className="rowf">
        <div className="colf">
          <BackgroundGradient className="colfw">
            <Link
              href="/faq"
              className="fun_slot"
              style={{
                backgroundImage: `url(${FAQBackground})`,
                fontFamily: "fantasy",
              }}
            >
              FAQ
            </Link>
          </BackgroundGradient>
        </div>

        <div className="colf">
          <BackgroundGradient className="colfw">
            <Link
              href="/wai"
              className="fun_slot"
              style={{
                fontFamily: "cursive",
                fontSize: "3vw",
                backgroundImage: `url(${Outline})`,
              }}
            >
              Who Am I
            </Link>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}

export default Fun;
