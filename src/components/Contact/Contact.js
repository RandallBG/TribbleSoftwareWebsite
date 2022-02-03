import "./Contact.css";
import Modal from "../modules/modal/Modal";

const Contact = () => {
  return (
    <div className="contactPage">
      <div>
        <h1>Contact Us</h1>
        <form id="contactForm">
          <div className="form-wrapper">
            <div className="form-group">
              <label for="name">Name:</label>
              <input className="formInput" type="text" name="name" id="name" />
              <label for="email">Email:</label>
              <input
                className="formInput"
                type="email"
                name="email"
                id="email"
              />
              <label for="phone">Phone:</label>
              <input
                className="formInput"
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            <div className="form-group">
              <label for="message">Message:</label>
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

      <Modal />
    </div>
  );
};

export default Contact;
