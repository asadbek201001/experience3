import React from "react";
import styled from "styled-components";

//pages
import Landing from "./pages/Landing";
import Content from "./pages/Content";
import Features from "./pages/Features";
import Form from "./pages/Form";
// import Testimonial from "./pages/Testimonial";
// import CallToAction from "./pages/CallToAction";
import ShowCase from "./pages/ShowCase";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import CallToAction from "./pages/CallToAction";
// import ShowCase from "./pages/ShowCase";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
import PricingTable from "./pages/PricingTable";
import Contact from "./pages/Contact";
// import PricingTable from "./pages/PricingTable";
// import Footer from "./pages/Footer";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function MainProject() {
  return (
    <Wrapper>
      <Landing />
      <Content />
      <Features />
      <Form />
      {/* <Testimonial /> */}

      <Testimonial />
      <CallToAction />
      <PricingTable />

      <ShowCase />
      <Team />
      <Contact />
    </ Wrapper>
  );
}
