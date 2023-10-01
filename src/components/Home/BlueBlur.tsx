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

// const Particle = styled.div`
//   position: absolute;
//   bottom: 300px;
//   left: 50%;
//   width: 5px;
//   height: 5px;
//   background: whitesmoke;
//   opacity: 0.8;
//   border-radius: 50%;
// `;

// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * max);
// }
// function getRandomFloat(max: number) {
//   return Math.random() * max;
// }

const BlueBlur = () => {
  // const particles = Array(100)
  //   .fill(null)
  //   .map((_, i) => {
  //     return {
  //       x: 300 + getRandomInt(300),
  //       y: 300 + getRandomInt(300),
  //       opacity: getRandomFloat(0.8),
  //     };
  //   });

  return (
    <>
      <BlueBackground />
      {/* {particles.map((p, i) => {
        return <Particle key={"part" + i} $opacity={p.opacity} $x={p.x} $y={p.y} />;
      })} */}
    </>
  );
};

export default BlueBlur;
