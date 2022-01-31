import { Link } from "react-router-dom";

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="heroText">
        <h1>Web developers who care</h1>
        <h3>Write to us for a quote, its free.</h3>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Hero;
