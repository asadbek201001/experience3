import styled from "styled-components";
import BG from "../images/PricingTable.jpg";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("${BG}");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgb(132, 110, 244);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 40px 20px;
`;

const Container = styled.div`
  max-width: 700px;
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

const ContainerPricing = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 35px;
  flex-wrap: wrap;
`;

const Case = styled.div`
  width: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
`;

const PlanTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin: 10px 0 20px;
  position: relative;

  &::after {
    font-size: 16px;
    position: absolute;
    top: 5px;
    right: -20px;
  }
`;

const Feature = styled.p`
  font-size: 14px;
  margin: 6px 0;
  color: ${(props) => (props.included ? "#fff" : "#ccc")};
  text-decoration: ${(props) => (props.included ? "none" : "line-through")};
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 12px 0;
  border-radius: 100px;
  border: none;
  background-color: ${(props) =>
    props.highlight ? "#E93A7D" : "rgba(255, 255, 255, 0.1)"};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const pricing = [
  {
    title: "Starter",
    price: "9.99",
    included: [true, true, true, true, false, false, false, false, false, false],
  },
  {
    title: "Professional",
    price: "19.99",
    included: [true, true, true, true, true, true, true, false, false, false],
  },
  {
    title: "Team",
    price: "49.99",
    included: [true, true, true, true, true, true, true, true, true, true],
  },
];

const features = [
  "2 GB of space",
  "14 days of backups",
  "Social integrations",
  "Client billing",
  "Remote access",
  "Custom domain",
  "24 hours support",
  "Admin tools",
  "Collaboration tools",
  "User management",
];

const PricingTable = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Plans & Pricing</Title>
        <P>
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </P>
      </Container>
      
      <ContainerPricing>
        {pricing.map((plan, index) => (
          <Case key={index}>
            <PlanTitle>{plan.title}</PlanTitle>
            <Price>{plan.price}</Price>
            {features.map((feat, i) => (
              <Feature key={i} included={plan.included[i]}>
                {feat}
              </Feature>
            ))}
            <Button highlight={plan.title === "Professional"}>Get Started</Button>
          </Case>
        ))}
      </ContainerPricing>
    </Wrapper>
  );
};

export default PricingTable;
