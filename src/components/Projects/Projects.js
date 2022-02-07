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
          <a
            href="https://www.aujus.randallgosnell.com"
            target="_blank"
            className="projectCard"
          >
            <h3 className="projectCardTitle">Au Jus</h3>
            <img src={auJus} alt="projects" loading="lazy" />
            <p className="projectCardDescription">
              We worked on this site doing many things blah blah blah
            </p>
          </a>
          <div className="projectCard">
            <h3 className="projectCardTitle">Randall's Portfolio</h3>
            <img src={randallPortfolio} alt="projects" loading="lazy" />
            <p className="projectCardDescription">
              worked on creating a stunning portfolio
            </p>
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
