import "./Nav.css";
import { Link } from "react-router-dom";

let Nav = (props) => {
  return (
    <nav className="navBar">
      <a className="logo" href="/">
        Tribble Software
      </a>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact us</Link>
        </li>
      </ul>
      <div>Social Media links</div>
    </nav>
  );
};

export default Nav;
