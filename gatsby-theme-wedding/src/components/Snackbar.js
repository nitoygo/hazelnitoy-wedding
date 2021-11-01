import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Snackbar = ({ timeout, message, show, setShow }) => {
  var SHOW = show;
  var MESSAGE = message;

  // convert the timeout prop to pass into the styled component
  let TIME = (timeout - 500) / 1000 + "s";

  let TIMER;
  function handleTimeout() {
    TIMER = setTimeout(() => {
      setShow(false);
    }, timeout);
  }

  function handleClose() {
    clearTimeout(TIMER);
    setShow(false);
  }

  useEffect(() => {
    if (SHOW) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [SHOW, TIMER]);

  return (
    SHOW && (
      <Container time={TIME}>
        <p>{MESSAGE}</p>
      </Container>
    )
  );
};

const fadein = keyframes`
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 1rem;
      opacity: 1;
    }
`;

const fadeout = keyframes`
    from {
      bottom: 1rem;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
`;

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: transparent;
  background-color: #e86c6c;
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadein} 0.5s, ${fadeout} 0.5s ${props => props.time};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.875rem;
  padding: 0;
  margin-left: 1rem;
  height: 1.75rem;
  width: 1.75rem;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: hsl(200, 100%, 60%);
  }
`;

export default Snackbar;
