import React from "react";
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
            Here at Tribble software we strive to create stunning websites
            tailored to your needs as a customer. We understand that every
            business problem requires a hand crafted solution. This is why we
            spend our time up front understanding you and your business needs.
            Once we understand how our clients business works, we set off to
            create something you can not only be proud of, but feel good showing
            people. Keep in mind visuals are just the beginning. We take our
            time to make sure everything on the page is laid out in a manner
            that brings your customers to the correct information. We do this to
            make sure you get the best engagements or sales possible. As a small
            team we take pride in making sure you know you’re not just another
            cog in the wheel, but one of our clients. To us, that means
            something.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
            pellentesque nec nam aliquam. Pharetra vel turpis nunc eget lorem
            dolor. Imperdiet proin fermentum leo vel orci porta non. Euismod
            elementum nisi quis eleifend quam adipiscing vitae proin. Sed nisi
            lacus sed viverra tellus in hac habitasse platea. Interdum velit
            laoreet id donec ultrices tincidunt. Morbi enim nunc faucibus a
            pellentesque sit amet porttitor. Sit amet est placerat in egestas
            erat. Sodales ut eu sem integer vitae. Nisl pretium fusce id velit.
            Orci a scelerisque purus semper eget duis.
          </p>
        </div>
      </div>
      <div className="column">
        <div className="columnBlurb">
          <h2>Our projects</h2>
          <p>
            We’ve had the pleasure of working with some great people over the
            course of our time as a business. Creating a business is tough work
            and we like to think we can help make the web aspect as smooth as
            possible so you can focus your efforts at more important things. If
            there’s one thing that makes us proud, its seeing our clients go on
            to do great things and know we helped in that journey, even if only
            a little.
          </p>
        </div>

        <div className="imgWrapper">
          <img src={projectMeeting} alt="project meeting" />
        </div>
      </div>
    </div>
  );
};
export default Home;
