import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import animationParams from "./animation-params";

const TextContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const P = styled.p`
    text-align: center;
    font-weight: 100;
    font-size: 1.25rem;
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
                    Rest assured, your attendance means so much more.<br/>
                    But for those who'd like to help our brand new start,<br/>
                    There's no need to shop nor add to cart.<br/>
                    Adding any amount to our savings pot will suffice.<br/>
                    That's all, thanks guys!
                </P>
            </TextContainer>
        </Element>
    </div>
    );
};

export default Gifts;