import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/logo/logo.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">

        <h1>Acquire NFTs, battle mighty opponents In this blockchain-based NFT Dungeon crawler game.</h1>
        <h5 className="text-light">Theerineum Dungeons connects the $THED native token as the in-game currency, allowing players to kick in the battle and claim the amazing game rewards</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
