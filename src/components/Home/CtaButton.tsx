import styled, { css, keyframes } from "styled-components";
import { rem } from "../../styles/typography";
import { useNavigate } from "react-router-dom";
import COLORS from "../../styles/colors";

const easeOutQuad = (t: number) => t * (2 - t);

const animateText = (from: string, to: string) => keyframes`
  0% {
    transform: translateY(${from})
  }
  100% {
    transform: translateY(${to})
  }
`;

const Character = styled.span<{ $mouseout?: boolean }>`
  position: relative;
  display: inline-block;
  min-width: 5px;
  transform: translate(0px, 0px);
  animation-duration: 0.4s;

  &:after {
    content: attr(data-char);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(200%);
  }

  ${(props) =>
    props.$mouseout &&
    css`
      animation-name: ${animateText("-200%", "0")};
    `}
`;

const Wrapper = styled.div`
  font-size: ${rem(15)};
  color: white;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  transition: 0.2s ease;
  background: ${COLORS.activeBlue};
  border-radius: 1px;
  cursor: pointer;
  &:hover {
    ${Character} {
      animation-name: ${animateText("0", "-200%")};
    }
  }
`;

const CharacterWrapper = styled.div`
  padding: 13px 20px;
  overflow: hidden;
`;

interface Props {
  children: string;
  to: string;
}

const CtaButton = ({ children, to }: Props) => {
  const characters = [...children];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Wrapper onClick={handleClick}>
      <CharacterWrapper>
        {characters.map((char, i) => (
          <Character
            key={i}
            data-char={char}
            $mouseout={false}
            style={{
              animationDelay: `${150 * easeOutQuad(i / characters.length)}ms`,
            }}
          >
            {char}
          </Character>
        ))}
      </CharacterWrapper>
    </Wrapper>
  );
};

export default CtaButton;
