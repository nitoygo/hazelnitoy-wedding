import React, { useState } from "react";
import styled from "styled-components";

import Modal from "react-modal";
import FloatingButton from "./FloatingButton";
import Snackbar from "../components/Snackbar";

import media from "./media";

Modal.setAppElement("#___gatsby");

const MAX_GUESTS = 2;

const RsvpForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [result, setResult] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleNameChange = e => {
    setGuestName(e.target.value);
  };

  const handleContactNumberChange = e => {
    setContactNumber(e.target.value);
  };

  const handleGuestCountChange = e => {
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
    setGuestCount(e.target.value);
  };

  const toggleModal = e => {
    setIsModalOpen(!isModalOpen);
  };

  const submitForm = () => {
    const successMessage = "RSVP Successful! See you!";
    const errorMessage = "RSVP Failed D: Please contact Nitoy or Hazel.";

    fetch("/.netlify/functions/gsheet_handler", {
      method: "POST",
      body: JSON.stringify({
        name: guestName,
        contactNumber: contactNumber,
        count: guestCount
      })
    })
      .then(response => {
        var result = JSON.parse(response);
        if (result.statusCode == 200) {
          setResult(successMessage);
        } else {
          setResult(errorMessage);
        }
      })
      .catch(error => {
        setResult(errorMessage);
      });

    setIsSnackbarOpen(true);
    toggleModal();
  };

  const closeForm = () => {
    setIsModalOpen(false);
    setIsSnackbarOpen(false);
  };

  return (
    <div>
      <FloatingButton onClick={toggleModal} />
      <Snackbar
        timeout={3000}
        message={result}
        show={isSnackbarOpen}
        setShow={setIsSnackbarOpen}
      />
      <Modal isOpen={isModalOpen} style={customStyles}>
        <Form>
          <Details>
            <HR />
            <Header1>RSVP</Header1>
            <HR />
            <P>
              We'll be honored to have you!'
            </P>
            <P>
              Please confirm your attendance
              On or before November 15, 2021
            </P>
            <HR />
            <Input
              type="text"
              placeholder="Name"
              name="guestName"
              value={guestName}
              onChange={handleNameChange}
            />
            <Input
              type="text"
              placeholder="Contact Number"
              name="contactNumber"
              value={contactNumber}
              onChange={handleContactNumberChange}
            />
            <Input
              type="number"
              placeholder="# of Guests"
              min="1"
              max="10"
              onChange={handleGuestCountChange}
            />
          </Details>
          <Buttons>
            <Button onClick={submitForm}>Accept</Button>
            <Button onClick={closeForm}>Regret</Button>
          </Buttons>
          <HR />
        </Form>
      </Modal>
    </div>
  );
};

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

const Header1 = styled.h1`
  text-align: center;
  padding: 0px;
  margin: 5px 5px;
`;

const P = styled.p`
  font-size: 1.25rem;
  font-family: 'Dancing Script', cursive;
  text-align: center;
  padding: 0px;
  margin: 5px 5px;
`;

const HR = styled.hr`
  width: 90%;
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

export default RsvpForm;
