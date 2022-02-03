import "./Contact.css"

const Contact = () => {
  return (
    <div className="contactPage">
      <div>
      <h1>Contact Us</h1>
      <form id="contactForm">
        <div className="form-group">
          <label for="name">Name:</label>
          <input class="formInput" type="text" name="name" id="name" />
          <label for="email">Email:</label>
          <input class="formInput" type="email" name="email" id="email" />
          <label for="phone">Phone:</label>
          <input class="formInput" type="text" name="phone" id="phone" />
         
          </div>
          <div className="form-group">
          <label for="message">Message:</label>
          <textarea class="formInput" name="message" id="message" rows="5"></textarea>

          </div>
        </form>
      </div>
      <button id="contactSubmitButton" data-callback="onSubmit" className="submitButton">Submit</button>

    </div>
    
  );
};

export default Contact;
