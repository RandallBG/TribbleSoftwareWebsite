import { Link } from "react-router-dom";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h1>Web developers who care</h1>
        <h2>Write to us for a quote, its free.</h2>
        <Link className="mainBtn" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Hero;
