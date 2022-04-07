import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://t.me/+9mi8fwFEQxUxMGQ0" target="_blank" rel="noreferrer">
        {" "}
        <BsTelegram />
      </a>
      <a href="https://twitter.com/theerineumcoin" target="_blank" rel="noreferrer">
        {" "}
        <AiFillTwitterCircle />
      </a>
      <a href="https://discord.gg/eQvXzwAuBX" target="_blank" rel="noreferrer">
        {" "}
        <FaDiscord />
      </a>
    </div>
  );
};

export default HeaderSocials;
