import "./Nav.css";
import { Link } from "react-router-dom";

let Nav = (props) => {
  const toggleNav = () => {
    document.getElementById("hamburgerMenu").classList.toggle("active");
    document.getElementById("responsiveLinks").classList.toggle("linksBlock");
  };

  return (
    <nav className="navBar">
      <a className="logo" href="/">
        Tribble Software
      </a>
      <ul id="responsiveLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <div id="socialMediaLinks">Social Media links</div>
      <div onClick={toggleNav} id="hamburgerMenu" className="hamburgerMenu">
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
