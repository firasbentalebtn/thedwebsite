import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com">
        {" "}
        <BsTelegram />
      </a>
      <a href="https://github.com">
        {" "}
        <AiFillTwitterCircle />
      </a>
      <a href="https://behance.com">
        {" "}
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
