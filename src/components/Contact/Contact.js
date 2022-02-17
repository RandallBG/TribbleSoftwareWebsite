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

    const formValidation = () => {
      //clear any previous errors
      document.getElementById("formErrors").innerHTML = "";
      //get the form values
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const phone = document.getElementById("phone");
      const spam = document.getElementById("testThis");

      //bool to determine if any errors were detected
      let isValid = true;

      //tests
      if (spam.value != "") {
        console.log(spam.value);
        isValid = false;
        document.getElementById("formErrors").innerHTML += "Spam detected!";
      }
      //name test
      if (name.value.length < 3) {
        name.style.borderColor = "red";
        //add error message
        document.getElementById("formErrors").innerHTML +=
          "<p class='formErrorItem'>Name must be at least 3 characters</p>";

        isValid = false;
      } else {
        name.style.borderColor = "green";
      }

      //email test
      if (email.value.length < 3) {
        email.style.borderColor = "red";
        isValid = false;
      } else {
        email.style.borderColor = "green";
      }

      //phone test
      //phone regex
      var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      //test field for spams

      if (phone.value.match(phoneRegex)) {
        phone.style.borderColor = "green";
      } else {
        phone.style.borderColor = "red";
        document.getElementById("formErrors").innerHTML +=
          "<p class='formErrorItem'>Phone number must be in the format xxx-xxx-xxxx</p>";
        isValid = false;
      }
      //message test
      if (message.value.length < 3) {
        message.style.borderColor = "red";
        document.getElementById("formErrors").innerHTML +=
          "<p class='formErrorItem'>Message must be at least 3 characters</p>";
        isValid = false;
      } else {
        message.style.borderColor = "green";
      }

      if (isValid) {
        sendForm();
      }
    };

    sendMailForm.addEventListener("click", (e) => {
      e.preventDefault();
      formValidation();
      // sendForm();
    });
  }, []);

  return (
    <div className="contactWrapper">
      <div id="formErrors"></div>
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
                <p id="the-great-filter">
                  <label id="testThisLabel">
                    if you are an actual person do not put anything here
                  </label>
                  <input
                    name="testThis"
                    type="text"
                    id="testThis"
                    defaultValue=""
                  />
                </p>
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
