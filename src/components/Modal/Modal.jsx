import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { useState } from "react";

const portalElement = document.getElementById("portal");

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const modalContent = (
    <div className={styles["common"]}>
      <div>Modal</div>
      <button type="button" className={styles["button"]} onClick={onCloseModal}>
        Close Modal
      </button>
    </div>
  );
  return showModal ? createPortal(modalContent, portalElement) : null;
};

export default Modal;
