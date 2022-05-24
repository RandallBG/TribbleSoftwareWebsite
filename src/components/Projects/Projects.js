import "./Projects.css";
import placeholder from "./placeholder500x281.png";
import auJus from "./AuJus.webp";
import randallPortfolio from "./RandallsPortfolio.webp";
import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <div className="projectCard">
        <img src={auJus} alt="Aujus website homepage"></img>
        <div className="projectCard__textSection">
          <h2 className="projectCard__textSection-title">Au Jus</h2>
          <p className="projectCard__textSection-text">A website created for an up and coming restaurant in the greater Cleveland Ohio area. Having a menu that is easily accessible and guiding users to the online ordering page through our UX and UI design were the most important aspects for this project. </p>
          <a href="https://www.aujus-cle.com" target="_blank" className="btn projectCard__textSection-btn">View Site</a>
        </div>
      </div>
      <div className="projectCard">

      </div>
      <div className="projectCard">
        <img src={randallPortfolio} alt="portfolio site homepage"></img>
        <div className="projectCard__textSection">
          <h2 className="projectCard__textSection-title">Portfolio Sites</h2>
          <p className="projectCard__textSection-text">Websites created to showcase a specific set of work done by an individual or group. The focus on these websites would be to really show what the client is capable of and show all the things they have and can accomplish.</p>
          <a href="https://www.RandallGosnell.com" target="_blank" className="btn projectCard__textSection-btn">View Site</a>
        </div>
      </div>
      <div className="projectCard">

      </div>
    </div>
  );
};

export default Projects;
