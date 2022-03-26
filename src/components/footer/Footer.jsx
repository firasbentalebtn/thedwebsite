import React from 'react'
import "./footer.css";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Logo_footer from "../../assets/logo/logo-white.png";


const Footer = () => {
  return (
    <footer>
      <a href="#header " className="footer__logo">
      <img src={Logo_footer} alt="Theerineum" />
      </a>
      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Gameplays Odes</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"> <BsTelegram/></a>
        <a href="https://linkedin.com"> <AiFillTwitterCircle/></a>
        <a href="https://github.com"><FaDiscord/></a>

      </div>
      <div className="footer__copyrights">
        <small>&copy; Theerineum.All Rights reserved 2022</small>
      </div>
    </footer>
  );
};

export default Footer