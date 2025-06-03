import React from "react";

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

//pages
import Landing from "./pages/Landing";
import Content from "./pages/Content";
import Features from "./pages/Features";
import Form from "./pages/Form";
import Testimonial from "./pages/Testimonial";
import styled from "styled-components";
// import CallToAction from "./pages/CallToAction";
// import ShowCase from "./pages/ShowCase";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import PricingTable from "./pages/PricingTable";
// import Footer from "./pages/Footer";

export default function MainProject() {
  return (
    <Wrapper>
      <Landing />
      <Content />
      <Features />
      <Form />
      <Testimonial />
    </Wrapper>
  );
}
