import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="pageContainer">
      <div className="textContainer">
        <div className="textSection">
          <h1 className="aboutTitle">Who we are</h1>
          <p>
            We're Tribble Software and we are a small team of web developers and
            designers who are passionate about creating beautiful and functional
            websites. We strive to provide our clients with the best possible
            experience and tailor you website to your needs. We are recent
            graduates of the Tri-C Software Developers Academy and have been
            operating in the Cleveland, Ohio area for the past 6 months. We are
            a new company and are looking for new opportunities to grow and make
            our clients' lives easier.
          </p>
        </div>

        <div className="textSection">
          <h1 className="aboutTitle">How we can help you</h1>
          <p>
            Developing an online presence for your business has never been more
            important than now. Here at Tribble, we help create a beautiful
            websites, that will attract new customers and keep them coming back.
            With our help you can be sure that your website will be a success
            and that your business will be growing. We lay our sites out in a
            way that ensures the most engagement possible. Converting a sale,
            signing them up for a newsletter, or just giving them the
            information they are looking for in the easiest to find locations.
          </p>
        </div>
      </div>
      <div class="btn">
        <Link to="/contact">Free Quote</Link>
      </div>
    </div>
  );
};

export default About;
