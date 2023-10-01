import styled from "styled-components";
import animationData from "./wide_animation.json";
import Lottie from "lottie-react";

const Wrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 130px;
  width: 600px;
  opacity: 0.8;
  path {
    fill: rgb(0, 63, 255, 0.8);
  }
`;

const WideAnimation = () => {
  return (
    <Wrapper>
      <Lottie animationData={animationData} loop={true} />;
    </Wrapper>
  );
};

export default WideAnimation;
