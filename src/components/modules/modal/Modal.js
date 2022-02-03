import "./Modal.css";
import Page from "./ModalPage";

const Modal = () => {
  //   document.getElementById("contactModal").addEventListener("click", () => {
  //     document.getElementById("contactModal").classList.toggle("modalActive");
  //   });
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
