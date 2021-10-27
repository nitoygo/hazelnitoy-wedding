import React, { useState } from "react";
import styled from "styled-components";

import Modal from "react-modal";
import FloatingButton from "./FloatingButton";
import media from "./media";

//import GoogleSpreadsheet from "google-spreadsheet";

Modal.setAppElement("#___gatsby");

const customStyles = {
  overlay: {
    alignItems: "center",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: "1000"
  },
  content: {
    backgroundColor: "#fff",
    color: "#666",
    padding: "10px",
    boxShadow: "2px 2px 4px rgb(0, 0, 0, .25)"
  }
};

const Form = styled.div`
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  margin: auto;
`;

const Details = styled.div`
  padding: 5px;
`;

const Buttons = styled.div`
  width: 100%;
`;

const Line = styled.p`
  margin: 0px auto 20px auto;
  text-align: center;
  color: #999;
`;

const Header1 = styled.h1`
  text-align: center;
  padding: 0px;
  margin: 5px 5px;
`;

const Header2 = styled.h2`
  text-align: center;
  padding: 0px;
  margin: 5px 5px;
`;

const P = styled.p`
  text-align: center;
  padding: 0px;
  margin: 5px 5px;
`;

const Input = styled.input`
  font-size: 15px;
  color: #666;
  padding: 6px;
  margin: 25px auto 20px;
  display: block;
  width: 50%;

  ${media.phone`
    width: 75%;
  `}
`;

const Button = styled.button`
  color: #666;
  background-color: #ffbdc7;
  border: none;
  font-size: 18px;
  font-weight: 600;
  padding: 15px 32px;
  width: 25%;
  margin: auto;
  border-right: solid 1px #cc919a;

  :active {
    transform: translateY(4px);
  }
  :hover {
    background-color: #cc919a;
    transition: 0.5s;
  }
  :focus {
    outline: 0;
  }
  ${media.phone`
    width: 50%;
  `}
`;

const MAX_GUESTS = 2;

const RsvpForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [count, setCount] = useState(0);

  const changeName = e => {
    setGuestName(e.target.value);
  };

  const changeContact = e => {
    setContactNum(e.target.value);
  };

  const handleNumberChange = e => {
    let value = e.target.value;
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
      if (value > MAX_GUESTS) {
        e.target.value = MAX_GUESTS;
      }
      if (value < 0) {
        e.target.value = "";
      }
    } else {
      e.target.value = "";
    }
    setCount(e.target.value);
  };

  const toggleModal = e => {
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    console.log(isOpen);
  };

  const afterClose = () => {
    console.log(isOpen);
  };

  const beforeClose = () => {};

  const submitForm = () => {
    console.log("Name: " + guestName);
    console.log("Contact Number: " + contactNum);
    console.log("RSVP: " + count);

    fetch("/.netlify/functions/gsheet_handler", {
      method: "POST",
      body: {
        name: guestName,
        contactNumber: contactNum,
        count: count
      }
    }).then(response => {
      console.log(JSON.stringify(response));
    });
  };

  return (
    <div>
      <FloatingButton onClick={toggleModal} />
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpen}
        onAfterClose={afterClose}
        onRequestClose={beforeClose}
        style={customStyles}
      >
        <Form>
          <Details>
            <Header1>RSVP</Header1>
            <Header2>Hazel & Nitoy's Wedding</Header2>
            <Header2>December 2, 2021</Header2>
            <Line>________________________________________</Line>
            <Header2>Ceremony</Header2>
            <P>San Antonio de Padua Parish</P>
            <P>Pooc, Silang (2:00 PM)</P>
            <Header2>Reception</Header2>
            <P>Alta Veranda de Tibig</P>
            <P>Tibig, Silang (4:30 PM)</P>
            <Line>________________________________________</Line>
            <Input
              type="text"
              placeholder="Name"
              name="guestName"
              value={guestName}
              onChange={changeName}
            />
            <Input
              type="text"
              placeholder="Contact Number"
              name="contactNum"
              value={contactNum}
              onChange={changeContact}
            />
            <Input
              type="number"
              placeholder="# of Guests"
              min="1"
              max="10"
              onChange={handleNumberChange}
            />
          </Details>
          <Buttons>
            <Button className="accept" onClick={submitForm}>
              Accept
            </Button>
            <Button>Regret</Button>
          </Buttons>
        </Form>
      </Modal>
    </div>
  );
};

export default RsvpForm;
