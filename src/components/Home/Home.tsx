import styled from "styled-components";
import { rem } from "../../styles/typography";
import Nav from "./Nav";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  height: 140vh;
  overflow: hidden;
`;

const SecondWrapper = styled.div`
  height: 200vh;
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

const TextWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const BlueBlur = styled.div`
  background: linear-gradient(
    108deg,
    rgb(0, 63, 255, 0.8),
    rgba(50, 100, 255, 0.65)
  );
  /* background: linear-gradient(108deg, rgb(0, 63, 255), rgba(115, 140, 255, 0.75)); */
  filter: blur(110px);
  border-radius: 6px 6px 12px 12px;
  width: 70%;
  height: 400px;
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
        </TextWrapper>
        <BlueBlur>{/*  */}</BlueBlur>
      </HeroWrapper>
      <SecondWrapper>{/* Content */}</SecondWrapper>
    </>
  );
}

export default Home;
