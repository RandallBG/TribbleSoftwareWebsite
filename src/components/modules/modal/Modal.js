import { useEffect } from "react";
import "./Modal.css";
import Page from "./ModalPage";

const Modal = () => {
  useEffect(() => {
    const toggleModal = () => {
      document.getElementById("contactModal").classList.toggle("modalActive");
    };

    document.getElementById("contactModal").addEventListener("click", (e) => {
      console.log("clicked");
      toggleModal();
    });
  });
  return (
    <div id="contactModal" className="modal modalActive">
      <Page
        title="Whats your name?"
        inputs={["First Name", "Last Name"]}
      ></Page>
    </div>
  );
};

export default Modal;
