import React from "react";
import styled from "styled-components";

import media from "./media";

import Prenup from "../components/Prenup";

const StyledFooter = styled.footer`
  min-height: 100%;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;

  ${media.phone`
     min-height: 65%;
   `}
`;

function Footer() {
  return (
    <StyledFooter>
      <Prenup />
    </StyledFooter>
  );
}

export default Footer;
