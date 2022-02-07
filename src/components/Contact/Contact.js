import "./Contact.css";
import Modal from "../modules/modal/Modal";

const Contact = () => {
  return (
    <div className="contactPage">
      <div>
        <h1>Contact Us</h1>
        <form id="contactForm" action="./react-backend/test.php">
          <div className="form-wrapper">
            <div className="form-group">
              <label>Name:</label>
              <input className="formInput" type="text" name="name" id="name" />
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
                rows="5"
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
      </div>
      {/* <div className="contactWrapper">
        <Modal />
      </div> */}
    </div>
  );
};

export default Contact;
