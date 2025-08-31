import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S Tesla"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        LeftBtnText="Custom order"
        rightbtnText="Existing inventory"
      />

      <Section
        title="Model Y Tesla"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        LeftBtnText="Custom order"
        rightbtnText="Existing inventory"
      />
      <Section
        title="Model 3 Tesla"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        LeftBtnText="Custom order"
        rightbtnText="Existing inventory"
      />
      <Section
        title="Model X Tesla"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        LeftBtnText="Custom order"
        rightbtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        LeftBtnText="Order now"
        rightbtnText="Learn more"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Role"
        backgroundImg="solar-roof.jpg"
        LeftBtnText="Order Now"
        rightbtnText="Learn more"
      />

      <Section
        title="Accessories"
        description="Solar Roof Costs Less Than a New Role"
        backgroundImg="accessories.jpg"
        LeftBtnText="Shop now"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;

export default Home;
