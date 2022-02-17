import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = () => {
  return (
    <div id="contactModal" className="modalWrapper">
      <div className="modalContent">
        <h1>Thank You!</h1>

        <h2>We will be in touch with you shortly.</h2>
      </div>
      <Link to="/" id="closeModal" className="closeModal">
        Close
      </Link>
    </div>
  );
};

export default Modal;
