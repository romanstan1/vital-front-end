import styled from "styled-components";

const Wrapper = styled.div`
  top: 00px;
  right: 450px;
  position: absolute;

  .pinkBg {
    background-color: rgba(0, 63, 255, 0.8) !important;
    background-image: linear-gradient(
      90deg,
      rgba(87, 123, 230, 0.678),
      rgba(0, 63, 255, 0.5)
    );
  }

  .intro-banner-vdo-play-btn .ripple {
    position: absolute;
    width: 450px;
    height: 450px;
    left: 0;
    top: 0;
    opacity: 0;
    border-radius: 300px;
    animation: ripple 2s infinite;

    &:nth-child(2) {
      animation-delay: 0.3s;
      -webkit-animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
      -webkit-animation-delay: 0.6s;
    }
  }

  @-webkit-keyframes ripple {
    0% {
      opacity: 1;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes ripple {
    0% {
      opacity: 1;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const PulseAnimation = () => {
  return (
    <Wrapper>
      <span className="intro-banner-vdo-play-btn">
        <span className="ripple pinkBg"></span>
        <span className="ripple pinkBg"></span>
        <span className="ripple pinkBg"></span>
      </span>
    </Wrapper>
  );
};

export default PulseAnimation;
