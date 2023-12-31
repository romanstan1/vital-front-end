import styled from "styled-components";
import { rem } from "../../styles/typography";
import Nav from "./Nav";
import CtaButton from "./CtaButton";
import InfiniteBanner from "./InfiniteBanner";
import PulseAnimation from "./PulseAnimation";
import WideAnimation from "./WideAnimation";
import BlueBlur from "./BlueBlur";

const HeroWrapper = styled.div`
  position: relative;
  background-color: black;
  background-image: linear-gradient(
      170deg,
      rgba(14, 14, 14, 0) 85%,
      rgba(14, 14, 14, 0.98)
    ),
    radial-gradient(
      circle at 10% 0,
      rgba(34, 34, 34, 0.98),
      rgba(14, 14, 14, 0.2) 14%,
      rgba(14, 14, 14, 0) 48%
    );

  height: 105vh;
  overflow: hidden;
`;

const SecondWrapper = styled.div`
  height: 1500px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 100px 20px;
  width: 100%;
  color: white;
`;

const HeroHeading = styled.h1`
  font-size: ${rem(90)};
  line-height: ${rem(80)};
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
  text-align: center;
`;

const Heading = styled(HeroHeading)`
  color: black;
  text-align: left;
  font-size: ${rem(60)};
  line-height: ${rem(65)};
  max-width: 800px;
`;

const HeroSubHeading = styled.p`
  font-size: ${rem(18)};
  line-height: ${rem(25)};
  font-weight: 300;
  font-family: "Inter";
  color: white;
  margin: 0;
  text-align: center;
  max-width: 550px;
`;

const SubHeading = styled(HeroSubHeading)`
  color: black;
  text-align: left;
  font-size: ${rem(20)};
  line-height: ${rem(25)};
`;

const TextWrapper = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
  margin-bottom: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 70px;
  gap: 10px;
`;

const Section = styled.div`
  margin-bottom: 500px;
  position: relative;
  width: 100%;
`;

function Home() {
  return (
    <>
      <HeroWrapper>
        <Nav />
        <TextWrapper>
          <HeroHeading>One API, all health data</HeroHeading>
          <HeroSubHeading>
            Vital helps leading digital health & wellness companies connect to
            wearables and labs, through a single universal API.
          </HeroSubHeading>
          <ButtonWrapper>
            <CtaButton to="/app" isLarge>
              Get started
            </CtaButton>
            <CtaButton to="/app" isLarge isSecondary>
              Book a demo
            </CtaButton>
          </ButtonWrapper>
        </TextWrapper>
        <BlueBlur />
      </HeroWrapper>
      <InfiniteBanner />
      <SecondWrapper>
        <Section>
          <Heading>Personalized health data at your fingertips</Heading>
          <SubHeading>
            Gain a unified view into your health data from wearables and labs
          </SubHeading>
          <PulseAnimation />
        </Section>
        <Section>
          <Heading>The widest coverage with one integration</Heading>
          <SubHeading>
            Instantly access data from 500+ devices and results from labs across
            50 States
          </SubHeading>
          <WideAnimation />
        </Section>
      </SecondWrapper>
    </>
  );
}

export default Home;
