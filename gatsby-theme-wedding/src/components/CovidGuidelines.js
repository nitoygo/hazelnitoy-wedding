import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import media from "./media";
import animationParams from "./animation-params";


import vaxImg from "../images/vaccine-pass.webp";
import maskImg from "../images/mask.webp";
import tempChkImg from "../images/Body-Temp-Measurement.webp";
import socialDistanceImg from "../images/social-distancing.webp";
import sanitizeImg from "../images/sanitize.webp";

const Container = styled.section`
  padding: 2rem 1rem;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 100;
`;

const Subtitle = styled.sub`
  font-weight: 450;
  font-size: 1rem;
  font-family: 'Dancing Script', cursive;
`;

const P = styled.p`
    font-family: 'Dancing Script', cursive;
    font-weight: 130;
    font-size: 1rem;
`;

const RemindersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RemindersCard = styled.article`
    margin: 0.5rem;
    width: 50%;
    align-items: center;
    display: flex;  
    flex-direction: row;

    ${media.phone`
        width: 90%;
    `}
`;

const Reminder = styled.p`
    text-align: justify;
    text-justify: inter-word;
    font-family: 'Dancing Script', cursive;
    width: 40rem;
    font-size: 1rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 7rem;
  height: 5rem;
  margin: 0 15px;
  display: block;
`;

const CovidGuidelines = () => {
  return(
    <div>
      <Element id="CovidGuidelines">
        <Container>
          <TitleContainer>
            <Heading {...animationParams}>Safety Reminders</Heading>
          </TitleContainer>
          <RemindersContainer>
            <RemindersCard>
              <Subtitle>
                In consideration for the health and safety of everyone,
                we kindly ask that you abide the following safety
                measures during our wedding ceremony and reception.
              </Subtitle>
            </RemindersCard>
            <RemindersCard>
              <Reminder>
                  Getting vaccinated before the event is highly encouraged.
                  Vaccinated guests will be requested to bring and present
                  their Vaccination Card before entering Church and Reception venue.
              </Reminder>
              <Image src={vaxImg} alt="" />
            </RemindersCard>
            <RemindersCard>
              <Image src={maskImg} alt="" />
              <Reminder>
                  Wearing of face mask and face shield is a must. This may only be
                  removed during photo-ops, cocktails and dinner.
              </Reminder>
            </RemindersCard>
            <RemindersCard>
              <Reminder>
                  Guests will be asked to undergo temperature check and fill up a
                  Health Declaration form at the venues.
              </Reminder>
              <Image src={tempChkImg} alt="" />
            </RemindersCard>
            <RemindersCard>
              <Image src={socialDistanceImg} alt="" />
              <Reminder>
                  Practice and maintain social distancing at all times. Protect yourself and others.
              </Reminder>
            </RemindersCard>
            <RemindersCard>
              <Reminder>
                  Wash and sanitize your hands frequently. Sanitizing areas will also be stationed
                  and provided for your convenience.
              </Reminder>
              <Image src={sanitizeImg} alt="" />
            </RemindersCard>
          </RemindersContainer>
        </Container>
      </Element>
    </div>
  );
};

export default CovidGuidelines;