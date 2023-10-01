import styled, { keyframes } from "styled-components";

const pulse = keyframes`
 0% { 
  opacity:1;
  transform: translate(-50%, 0px) scale(1);
}
 50% { 
  opacity: 0.9;
  transform: translate(-50%, 100px) scale(0.8);
}
 100% { 
  opacity:1;
  transform: translate(-50%, 0) scale(1);
  }
`;

const BlueBackground = styled.div`
  background: linear-gradient(
    108deg,
    rgb(0, 63, 255, 0.8),
    rgba(50, 100, 255, 0.65)
  );
  filter: blur(110px);
  border-radius: 6px 6px 12px 12px;
  width: 90%;
  height: 50vh;
  left: 50%;
  transform: translate(-50%, 0) scale(1);
  position: absolute;
  bottom: -20%;

  animation-name: ${pulse};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const BlueBlur = () => {
  return <BlueBackground />;
};

export default BlueBlur;
