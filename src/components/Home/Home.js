import React from "react";
import "./Home.css";
import laptop from "./Laptop.jpg";
import Footer from "../modules/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="column">
        <div className="columnBlurb">
          <h2>What we do</h2>
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

        <div className="imgWrapper">
          <img src={laptop} alt="laptop" />
        </div>
      </div>
      <div className="column">
        <div className="imgWrapper odd">
          <h2>PICTURE</h2>
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

        <div className="imgWrapper">
          <h2>PICTURE</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
