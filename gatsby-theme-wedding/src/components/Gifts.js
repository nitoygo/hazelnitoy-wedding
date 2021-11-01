import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import animationParams from "./animation-params";

const TextContainer = styled.div`
  padding: 2rem 1rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const P = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 1rem;
  font-family: 'Dancing Script', cursive;
`;

const Gifts = () => {
  return(
  <div>
    <Element id="Gifts">
      <TextContainer>
        <Heading {...animationParams}>Gifts</Heading>
        <P>
          If a gift registry is what you're looking for<br/>
          Rest assured, your attendance means so much more<br/>
          For those who believe that a present is worth giving<br/>
          A saving for our future is a delightful blessing
        </P>
      </TextContainer>
    </Element>
  </div>
  );
};

export default Gifts;