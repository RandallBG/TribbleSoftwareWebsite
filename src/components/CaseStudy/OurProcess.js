
/* REFACTOR CSS TO MAKE SENSE WITH THE CHANGE FROM CASE STUDY TO OUR PROCESS PAGE */
import "./aujusCase.css";
import Meeting from "../../images/meeting.webp";
import FigmaDesign from "../../images/figmaDesign.webp";
import CodePic from "../../images/Code.webp";
import FinishedMeeting from '../../images/finishedMeeting.webp';
import {Link} from "react-router-dom";


function AujusCase() {
  return (
    <div className="center">
        <div className="CaseStudy__title">
            <h1 className="CaseStudy__title-main">Roadmap to your website</h1>
        </div>
        

        <div className="CaseStudy__wrapper">
                <div className="CaseStudy__row">
                    <div className="CaseStudy__body">
                        <h2 className="CaseStudy__body-title">Discovery</h2>
                        <p>The first part of creating any website we make is meeting with you and understanding what you as a client are looking for. Just like every business is different, so is every website. We take the time to understand your goals and brand so we can create the perfect website tailored to your needs. 
                        </p>
                    </div>
                    <div className="CaseStudy__image">
                        <img src={Meeting} alt="AuJus" />
                    </div>
            </div>
            <div className="CaseStudy__row">
                <div className="CaseStudy__image">
                    <img src={FigmaDesign} alt="AuJus" />
                </div>
                <div className="CaseStudy__body">
                    <h2 className="CaseStudy__body-title">Design</h2>
                    <p>There are multiple options for you to choose from. We have custom templates created by us that you can choose from or we can design your website from scratch
                       to fit your business needs. Our process involves creating a design document for you to review. After you review it and okay it we start the development
                    </p>
                </div>
            </div>
            <div className="CaseStudy__row">
                <div className="CaseStudy__body">
                    <h2 className="CaseStudy__body-title">Development</h2>
                    <p>Our software engineers then get to work turning that design document into the website you and your customers will use. We spend time trouble shooting and making sure
                       your users have the best experience possible.
                    </p>
                </div>
                <div className="CaseStudy__image">
                    <img src={CodePic} alt="AuJus" />
                </div>
            </div>
            <div className="CaseStudy__row">
                <div className="CaseStudy__image">
                    <img src={FinishedMeeting} alt="AuJus" />
                </div>
                <div className="CaseStudy__body">
                    <h2 className="CaseStudy__body-title">Deployment</h2>
                    <p>After development has wrapped up and your site is looking good it's time for hosting. We can take all the hassle out of hosting your site and host it for you or we can deploy it to
                       your hosting provider if you already have one. Most people prefer us to take care of the hassle of hosting for them but the choice is really up to you.
                    </p>
                </div>
                
            </div>
        </div>
        <Link  to="../contact" className="btn">free quote</Link>
    </div>
  )
}

export default AujusCase

