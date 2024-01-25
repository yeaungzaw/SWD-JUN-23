import React from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { state } = useLocation();
  return <div>AboutPage is {state.phoneNumber}</div>;
};

export default AboutPage;
