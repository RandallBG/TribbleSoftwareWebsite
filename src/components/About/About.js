import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="pageContainer">
      <div className="textContainer">
        <div className="textSection">
          <h1 className="aboutTitle">Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum dui faucibus in ornare. Tincidunt eget nullam non nisi.
            Ornare arcu odio ut sem nulla pharetra diam. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. Convallis aenean et
            tortor at risus viverra. Volutpat commodo sed egestas egestas
            fringilla. Tincidunt arcu non sodales neque. Tristique nulla aliquet
            enim tortor at auctor urna. Sem viverra aliquet eget sit amet tellus
            cras adipiscing. Tortor id aliquet lectus proin nibh nisl
            condimentum. Facilisi cras fermentum odio eu. Eget gravida cum
            sociis natoque penatibus et magnis. Facilisis leo vel fringilla est
            ullamcorper eget nulla facilisi etiam. A diam maecenas sed enim ut.
            Non pulvinar neque laoreet suspendisse interdum consectetur.
            Condimentum id venenatis a condimentum vitae sapien pellentesque
            habitant. Non diam phasellus vestibulum lorem sed risus ultricies
            tristique. Eu sem integer vitae justo eget magna fermentum iaculis
            eu. Suscipit tellus mauris a diam maecenas sed enim ut sem. Neque
            volutpat ac tincidunt vitae semper quis lectus nulla. Pharetra vel
            turpis nunc eget. Maecenas pharetra convallis posuere morbi leo. Ac
            feugiat sed lectus vestibulum mattis ullamcorper velit sed
            ullamcorper.
          </p>
        </div>

        <div className="textSection">
          <h1 className="aboutTitle">How we can help you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum dui faucibus in ornare. Tincidunt eget nullam non nisi.
            Ornare arcu odio ut sem nulla pharetra diam. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. Convallis aenean et
            tortor at risus viverra. Volutpat commodo sed egestas egestas
            fringilla. Tincidunt arcu non sodales neque. Tristique nulla aliquet
            enim tortor at auctor urna. Sem viverra aliquet eget sit amet tellus
            cras adipiscing. Tortor id aliquet lectus proin nibh nisl
            condimentum. Facilisi cras fermentum odio eu. Eget gravida cum
            sociis natoque penatibus et magnis. Facilisis leo vel fringilla est
            ullamcorper eget nulla facilisi etiam. A diam maecenas sed enim ut.
            Non pulvinar neque laoreet suspendisse interdum consectetur.
            Condimentum id venenatis a condimentum vitae sapien pellentesque
            habitant. Non diam phasellus vestibulum lorem sed risus ultricies
            tristique. Eu sem integer vitae justo eget magna fermentum iaculis
            eu. Suscipit tellus mauris a diam maecenas sed enim ut sem. Neque
            volutpat ac tincidunt vitae semper quis lectus nulla. Pharetra vel
            turpis nunc eget. Maecenas pharetra convallis posuere morbi leo. Ac
            feugiat sed lectus vestibulum mattis ullamcorper velit sed
            ullamcorper.
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
