import React, { Fragment, useEffect } from "react";
import sal from "sal.js";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Cover from "../components/Cover";
import Map from "../components/Map";
import CountdownSection from "../components/CountdownSection";
import Profile from "../components/Profile";

import Navigation from "../components/Navigation";

const Landing = () => {
  useEffect(() => {
    sal();
  });
  return (
    <Fragment>
      <SEO />
      <Navigation />
      <Layout>
        <Cover />
        <Profile />
        <CountdownSection />
        <Map />
      </Layout>
    </Fragment>
  );
};

export default Landing;
