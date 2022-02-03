import "./Projects.css";
import placeholder from "./placeholder500x281.png";
import auJus from "./Aujus.jpeg";
import randallPortfolio from "./RandallsPortfolio.jpeg";

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="projectRow">
        <div className="projectHeadingWrapper">
          <h1 id="projectsHeading">What we can do. . .</h1>
        </div>
        <div className="projects">
          <div className="projectCard">
            <a href="https://www.aujus.randallgosnell.com" target="_blank">
              <img src={auJus} alt="projects" loading="lazy" />
            </a>
            <p></p>
          </div>
          <div className="projectCard">
            <img src={randallPortfolio} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div className="projectCard">
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div className="projectCard">
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
        </div>
      </div>

      <div className="projectRow">
        <div className="projectHeadingWrapper">
          <h1 id="projectsHeading2">Together</h1>
        </div>
        <div className="projects">
          <div className="projectCard">
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div className="projectCard">
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div className="projectCard">
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
