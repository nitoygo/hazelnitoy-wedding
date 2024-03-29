import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import media from "./media";
import animationParams from "./animation-params";

import attireImg from "../images/Attire.webp";

const TextContainer = styled.div`
  padding: 2rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const Subtitle = styled.sub`
  font-size: 1rem;
  font-family: 'Dancing Script', cursive;
`;

const AttireCard = styled.div`
  display: flex;    
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 30rem;
  height: 30rem;
  display: block;
  
  ${media.phone`
    width: 20rem;
    height: 20rem;
`}
`;

const Attire = () => {
  return(
    <div>
      <Element id="Attire">
        <TextContainer>
          <Heading {...animationParams}>Dress Code</Heading>
          <AttireCard>
            <Image src={attireImg} alt="" />
            <Subtitle>
              <br/>
              Theme: Rustic / Modern Filipiniana<br/><br/>
              Ladies: Semi-Formal or Cocktail dress<br/>
              Gentlemen: Barong or Semi-Formal
            </Subtitle>
          </AttireCard>
        </TextContainer>
      </Element>
    </div>
  );
};

export default Attire;