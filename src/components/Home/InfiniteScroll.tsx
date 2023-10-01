import styled, { keyframes } from "styled-components";
// import { rem } from "../../styles/typography";
import ClearLogo from "../../assets/logos/clear.svg?react";
import UnaLogo from "../../assets/logos/una.svg?react";
import WyndlyLogo from "../../assets/logos/wyndly.svg?react";
import FrankieLogo from "../../assets/logos/frankie.svg?react";

const slide = keyframes`
 0% { transform: translate3d(0%, 0, 0); }
 100% { transform: translate3d(-100%, 0, 0); }
`;

const Outer = styled.div`
  overflow: hidden;
  margin: 40px 0 20px 0;
  width: 100%;
  max-width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  animation-name: ${slide};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform: translate3d(0%, 0, 0);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
`;

const LogoGroup = () => {
  return (
    <Wrapper>
      <ClearLogo />
      <UnaLogo />
      <WyndlyLogo />
      <FrankieLogo />
      <ClearLogo />
      <UnaLogo />
      <WyndlyLogo />
      <FrankieLogo />
    </Wrapper>
  );
};
const InfiniteScroll = () => {
  return (
    <Outer>
      <Inner>
        <LogoGroup />
        <LogoGroup />
      </Inner>
    </Outer>
  );
};

export default InfiniteScroll;
