import { Mission } from "./Mission";
import { About } from "./About";
import { Service } from "./Service";

import React from "react";
import Footer from "../footer/Footer";

export const Landing = () => {
  return (
    <>
      <div>Landing</div>
      <Mission />
      <About />
      <Service />
      <Footer />

    </>
  );
};

export default Landing;
