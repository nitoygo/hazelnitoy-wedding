import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = styled.div`
  position: fixed;
  width: 100%;
  z-index: 200;
  background: #ffffff;
  opacity: 0.5;
`;

const NavLinksWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  list-style: none;
`;

const pages = [
  { id: "Cover", alias: "Cover" },
  { id: "Profile", alias: "About Us" },
  { id: "CountdownSection", alias: "Countdown" },
  { id: "Map", alias: "Venue" }
];

const NavBarLink = ({ id, alias }) => {
  return (
    <li>
      <Link to={id} spy={true} smooth={true} duration={1000}>
        {alias}
      </Link>
    </li>
  );
};

const NavBarLinks = navPages =>
  navPages.map(navPage => <NavBarLink id={navPage.id} alias={navPage.alias} />);

const Navigation = () => {
  return (
    <Menu>
      <NavLinksWrapper>{NavBarLinks(pages)}</NavLinksWrapper>
    </Menu>
  );
};

export default Navigation;
