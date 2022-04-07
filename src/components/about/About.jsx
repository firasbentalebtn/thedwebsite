import React from "react";
import "./about.css";
import ME from "../../assets/chart.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaGamepad } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
import { RiSafe2Line } from "react-icons/ri";

import Whitepaper from "../../assets/whitepaper.pdf";

const About = () => {
  return (
    <section id="about">
      <h2>About Theerineum</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Token Name:</h5>
              <small>Theerinium</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Token Network</h5>
              <small>BEP20 </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Total Supply:</h5>
              <small>1,000,000,000</small>
            </article>
          </div>
          <br />
          <div className="hr__line"></div>
          <br />
          {/* Token Distrobution */}
          <div className="about__cards">
            <article className="about__card">
              <FaGamepad className="about__icon" />
              <h5>Game Ecosystem:</h5>
              <small>30%</small>
            </article>
            <article className="about__card">
              <GiGrowth className="about__icon" />
              <h5>Marketing</h5>
              <small>5% </small>
            </article>
            <article className="about__card">
              <RiSafe2Line className="about__icon" />
              <h5>Liquidity lock:</h5>
              <small>10%</small>
            </article>
          </div>
          
          <p>
          Check the Whitepaper for more detailed informations


          </p>
          <a href={Whitepaper} target='_blank' className="btn btn-primary" rel="noreferrer">
            WhitePaper
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default About;
