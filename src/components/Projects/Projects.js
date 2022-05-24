import "./Projects.css";
import placeholder from "./placeholder500x281.png";
import auJus from "./Aujus.jpeg";
import randallPortfolio from "./RandallsPortfolio.jpeg";
import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="projectRow">
        <div className="projectHeadingWrapper">
          <h1 id="projectsHeading">What we can do. . .</h1>
        </div>
        <div className="projects">
          <a
            href="https://aujus-cle.com"
            target="_blank"
            className="projectCard"
          >
            <h3 className="projectCardTitle">Au Jus</h3>
            <img src={auJus} alt="projects" loading="lazy" />
            <p className="projectCardDescription">
              Worked with an up and coming resturant to create an online
              presence and a place for their customers to see their menu and
              order.
            </p>
          </a>
          <a
            href="https://www.randallgosnell.com"
            target="_blank"
            className="projectCard"
          >
            <h3 className="projectCardTitle">Randall's Portfolio</h3>
            <img src={randallPortfolio} alt="projects" loading="lazy" />
            <p className="projectCardDescription">
              A portfolio website created for a local web developer to show
              employers. Showcases their known technologies and work.
            </p>
          </a>
        </div>
      </div>

      <div className="projectRow">
        <div className="projectHeadingWrapper">
          <h1 id="projectsHeading2"></h1>
        </div>
        <div className="projects"></div>
      </div>
    </div>
  );
};

export default Projects;
