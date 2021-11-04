import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import media from "./media";

const Video = styled.div`
  display: flex;    
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 768px;

  ${media.phone`
    width: 100%;
    height: 100%;
  `}
`;


const Prenup = () => {
  return(
  <div>
    <Element id="Prenup">
      <Video>
        <IFrame src="https://drive.google.com/file/d/16bIVj6hJXQ4uL0FV8NKR86OCW90uNAe6/preview" allow="autoplay"></IFrame>
      </Video>
    </Element>
  </div>
  );
};

export default Prenup;
