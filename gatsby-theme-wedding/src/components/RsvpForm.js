import React, { useState } from "react";
import Modal from "react-modal";
import FloatingButton from "./FloatingButton";

Modal.setAppElement("#___gatsby");

const customStyles = {
  overlay: {
    zIndex: "1000"
  }
};

const RsvpForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = e => {
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    console.log(isOpen);
  };

  const afterClose = () => {
    console.log(isOpen);
  };

  const beforeClose = () => {};

  return (
    <div>
      <FloatingButton onClick={toggleModal} />
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpen}
        onAfterClose={afterClose}
        onRequestClose={beforeClose}
        style={customStyles}
      >
        NITOY
      </Modal>
    </div>
  );
};

export default RsvpForm;
