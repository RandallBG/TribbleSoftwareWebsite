import "./Contact.css";
import Modal from "../modules/modal/Modal";
import customerService from "../../images/CustomerServiceSmall.jpg";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const modal = document.getElementById("contactModal");
    const sendMailForm = document.getElementById("contactSubmitButton");

    async function sendForm() {
      let xhr = new XMLHttpRequest();

      xhr.open("POST", "./react-backend/mailInstructions.php", true);
      let data = new FormData(document.getElementById("contactForm"));

      xhr.send(data);

      xhr.onload = function () {
        if (xhr.status != 200) {
          document.getElementById("contactSubmitButton").innerHTML = "Error";
        } else {
          modal.style.display = "flex";
          document.getElementById("contactSubmitButton").disabled = true;
          document.getElementById("contactSubmitButton").innerHTML = "Sent!";
        }
      };
    }

    sendMailForm.addEventListener("click", (e) => {
      e.preventDefault();
      sendForm();
    });
  }, []);

  return (
    <div className="contactWrapper">
      <div>
        <div className="contactContainer">
          <form
            id="contactForm"
            action="./react-backend/mailInstructions.php"
            method="POST"
          >
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
      <Modal />
    </div>
  );
};

export default Contact;
