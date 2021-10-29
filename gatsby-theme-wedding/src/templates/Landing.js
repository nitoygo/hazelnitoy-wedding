import React, { Fragment, useEffect } from "react";
import sal from "sal.js";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Cover from "../components/Cover";
import Map from "../components/Map";
import CountdownSection from "../components/CountdownSection";
import Profile from "../components/Profile";

import Navigation from "../components/Navigation";
import RsvpForm from "../components/RsvpForm";

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
      <RsvpForm />
    </Fragment>
  );
};

export default Landing;
