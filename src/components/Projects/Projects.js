import "./Projects.css";
import placeholder from "./placeholder500x281.png";
import auJus from "./Aujus.jpeg";
import randallPortfolio from "./RandallsPortfolio.jpeg";

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="projectRow">
        <div class="projectHeadingWrapper">
          <h1 id="projectsHeading">What we can do. . .</h1>
        </div>
        <div className="projects">
          <div>
            <a href="https://www.aujus.randallgosnell.com" target="_blank">
              <img src={auJus} alt="projects" loading="lazy" />
            </a>
            <p></p>
          </div>
          <div>
            <img src={randallPortfolio} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div>
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div>
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
        </div>
      </div>

      <div className="projectRow">
        <div class="projectHeadingWrapper">
          <h1 id="projectsHeading2">Together</h1>
        </div>
        <div className="projects">
          <div>
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div>
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
          <div>
            <img src={placeholder} alt="projects" loading="lazy" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
