import React, { Children, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalWrapper } from "./Modal.styles";
import { Button } from "../../atoms/Button/Button";

const modalContainer = document.getElementById("modal-container");

const Modal = (Children) => {
  const modalNode = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      {Children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
