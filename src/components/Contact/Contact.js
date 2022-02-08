import "./Contact.css";
import customerService from "../../images/CustomerServiceSmall.jpg";

const Contact = () => {
  return (
    <div className="contactWrapper">
      <div>
        {/* <h1 className="contactTitle">Contact Us</h1> */}
        <div className="contactContainer">
          <form id="contactForm" action="./react-backend/test.php">
            <div className="form-wrapper">
              <div className="form-group">
                <label>Name:</label>
                <input
                  className="formInput"
                  type="text"
                  name="name"
                  id="name"
                />
                <label>Email:</label>
                <input
                  className="formInput"
                  type="email"
                  name="email"
                  id="email"
                />
                <label>Phone:</label>
                <input
                  className="formInput"
                  type="text"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  className="formInput"
                  name="message"
                  id="message"
                  rows="10"
                ></textarea>
              </div>
            </div>

            <button
              id="contactSubmitButton"
              data-callback="onSubmit"
              className="submitButton"
            >
              Submit
            </button>
          </form>
          <div className="contactBlurb">
            <h3 className="contactTitle">Get a Quote</h3>
            <img src={customerService}></img>
            <p className="contactText">
              Don't know where to start? No problem. We will walk you through
              everything it takes from start to finish. Send us a message today
              for a free consultation
            </p>
          </div>
        </div>
      </div>
      {/* <div className="contactWrapper">
        <Modal />
      </div> */}
    </div>
  );
};

export default Contact;
