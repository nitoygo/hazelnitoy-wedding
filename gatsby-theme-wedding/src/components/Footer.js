import React from "react";
import styled from "styled-components";

import media from "./media";
import logoImg from "../images/icon.png";

const StyledFooter = styled.footer`
  height: ${props => props.theme.footer.height};
  background-color: #ffffff;
  margin-top: 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Content = styled.div`
  height: ${props => props.theme.footer.height};
  text-align: center;
  display: flex;
  margin: 0.5rem;
  align-items: center;
  justify-content: space-around;

  ${media.phone`
    flex-direction: column;
  `}
`;

function Footer() {
  return (
    <StyledFooter>
      <Content>
        <img src={logoImg} alt="" height="75%" />
      </Content>
    </StyledFooter>
  );
}

export default Footer;
