import React, { useState } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";

import FloatingButton from "./FloatingButton";

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 400;
`;

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition : all 0.3s ease-in-out;`;

function ModalForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setOpacity(0);
    console.log("isOpen?" + !isOpen);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
      console.log("opened");
    }, 100);
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0);
      console.log("closed");
      setTimeout(resolve, 300);
    });
  }

  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
      backgroundProps={opacity}
    >
      <span>I am a modal!</span>
      <button onClick={toggleModal}>Close me</button>
    </StyledModal>
  );
}

export default ModalForm;
