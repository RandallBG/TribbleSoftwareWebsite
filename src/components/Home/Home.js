import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import whatWeDo from "../../images/WhatWeDoSmall.jpg";
import projectMeeting from "../../images/Projects.jpg";
import peopleTalking from "../../images/peopleTalking.jpg";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="column">
        <div className="columnBlurb">
          <h2>What we do</h2>
          <p>
            Shutup Derek We strive to create stunning websites tailored to your needs as a
            customer. We understand that every business problem requires a hand
            crafted solution. This is why we spend our time up front
            understanding you and your business needs. Once we understand how
            our clients business works, we set off to create something you can
            not only be proud of, but feel good showing people. Keep in mind
            visuals are just the beginning. We take our time to make sure
            everything on the page is laid out in a manner that brings your
            customers to the correct information. We do this to make sure you
            get the best engagements or sales possible. As a small team we take
            pride in making sure you know you’re not just another cog in the
            wheel, but one of our clients. To us, that means something.
          </p>
        </div>

        <div className="imgWrapper">
          <img src={whatWeDo} alt="laptop" />
        </div>
      </div>
      <div className="column">
        <div className="imgWrapper odd">
          <img src={peopleTalking} alt="people talking" />
        </div>
        <div className="columnBlurb">
          <h2>What customers say</h2>
          <p>
            "In early 2022, my company Au Jus LLC needed a nice new streamlined
            website. The website needed to both look visually appealing and have
            ease of use. We decided to go with Tribble Software. The company was
            super informative, explained all the available options, and steered
            us in the right direction. We met the company owners virtually and
            in person. These meetings helped everything move forward smoothly.
            Anybody interested in a new website, or other tech solutions should
            contact Tribble software for a consultation. They are highly
            recommended."
            <span className="quote"> ~ Jakob Kelly , owner Au Jus LLC</span>
          </p>
        </div>
      </div>
      <div className="column">
        <div className="columnBlurb">
          <h2>Our projects</h2>
          <p>
            We’ve had the pleasure of working with some great people over the
            course of our time as a business. Operating a business is alot of
            work. We make the web aspect as smooth as possible so you can focus
            your efforts on more important things. If there’s one thing that
            makes us proud, its seeing our clients go on to do great things and
            know we helped in that journey, even if only a little. Check out
            some of our projects here.
          </p>
          <Link className="btn" to="/projects">
            View Projects
          </Link>
        </div>

        <div className="imgWrapper">
          <img src={projectMeeting} alt="project meeting" />
        </div>
      </div>
    </div>
  );
};
export default Home;
