import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import media from "./media";
import animationParams from "./animation-params";

import attireImg from "../images/Attire.webp";

const TextContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const Subtitle = styled.sub`
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Dancing Script', cursive;
`;

const AttireCard = styled.div`
    margin: 2rem;
    width: 100%;
    display: flex;    
    flex-direction: column;
    align-items: center;

    ${media.phone`
        width: 90%;
    `}
`;

const Image = styled.img`
  object-fit: cover;
  width: 30rem;
  height: 30rem;
  margin: 0 auto;
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