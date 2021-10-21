import React from "react";
import PropTypes from "prop-types";

import { Fab } from "react-tiny-fab";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "react-tiny-fab/dist/styles.css";

function FloatingButton({ onClick }) {
  return (
    <Fab
      //mainButtonStyles={mainButtonStyles}
      //actionButtonStyles={actionButtonStyles}
      //style={style}
      icon={<faCoffee />}
      event="click"
      alwaysShowTitle={true}
      onClick={onClick}
    />
  );
}

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FloatingButton;
