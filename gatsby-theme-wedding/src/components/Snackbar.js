import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Snackbar = ({ timeout, message, show, setShow }) => {
  var SHOW = show;
  var MESSAGE = message;

  // convert the timeout prop to pass into the styled component
  let TIME = (timeout - 500) / 1000 + "s";

  let TIMER;
  const handleTimeout = () => {
    TIMER = setTimeout(() => {
      setShow(false);
    }, timeout);
  };

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
  z-index: 1100;
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

export default Snackbar;
