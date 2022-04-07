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
        <li><a href="#services">Gameplays Modes</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://t.me/+9mi8fwFEQxUxMGQ0" target='_blank' rel="noreferrer"> <BsTelegram/></a>
        <a href="https://twitter.com/theerineumcoin" target='_blank' rel="noreferrer"> <AiFillTwitterCircle/></a>
        <a href="https://discord.gg/eQvXzwAuBX" target='_blank' rel="noreferrer"><FaDiscord/></a>

      </div>
      <div className="footer__copyrights">
        <small>&copy; Theerineum. <br /> All Rights reserved 2022</small>
      </div>
    </footer>
  );
};

export default Footer