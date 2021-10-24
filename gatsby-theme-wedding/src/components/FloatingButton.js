import React from "react";
import PropTypes from "prop-types";

import { Fab } from "react-tiny-fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";

import "react-tiny-fab/dist/styles.css";

const customStyles = {
  position: "fixed",
  bottom: "0",
  right: "0",
  zIndex: "900"
};

function FloatingButton({ onClick }) {
  return (
    <Fab
      style={customStyles}
      icon={<FontAwesomeIcon icon={faCocktail} />}
      event="click"
      alwaysShowTitle={true}
      onClick={onClick}
      mainButtonStyles={{ backgroundColor: "#E86C6C", borderRadius: 48 }}
    />
  );
}

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FloatingButton;
