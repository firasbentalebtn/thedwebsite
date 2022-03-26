import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { RiRoadMapLine } from "react-icons/ri";
import { GiConsoleController } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}>
        <BiDollar />
      </a>

      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services'? 'active' : ''}>
        <GiConsoleController />
      </a>
      <a href="#roadmap" onClick={() => setActiveNav('#roadmap')} className={activeNav === '#roadmap'? 'active' : ''}>
        <RiRoadMapLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
