import Whitepaper from "../../assets/whitepaper.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Whitepaper} download className="btn">
        Download whitepaper
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Us
      </a>
    </div>
  );
};

export default CTA;
