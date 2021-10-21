import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import Footer from "./Footer";

const Main = styled.main`
  position: relative;
  height: 100%;
  z-index: 100;
  background-color: #ffffff;
  margin-bottom: ${props => props.theme.footer.height};
  overflow-x: hidden;
`;

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: all 0.3s ease-in-out;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ModalProvider backgroundComponent={FadingBackground}>
          <Main css={``}>{children}</Main>
          <Footer />
          <GlobalStyles />
        </ModalProvider>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
