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

const Character = styled.span`
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
`;

const Wrapper = styled.div<{ $isSecondary?: boolean }>`
  color: white;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  transition: 0.2s ease;
  background: ${COLORS.activeBlue09};
  border-radius: 1px;
  cursor: pointer;
  &:hover {
    background: ${COLORS.activeBlue};
    ${Character} {
      animation-name: ${animateText("0", "-200%")};
    }
  }

  ${(props) =>
    props.$isSecondary &&
    css`
      border: 1px solid ${COLORS.white08};
      background: transparent;
      &:hover {
        background: transparent;
      }
    `};
`;

const CharacterWrapper = styled.div<{ $isLarge?: boolean }>`
  padding: 13px 20px;
  overflow: hidden;
  font-size: ${rem(15)};
  display: flex;
  justify-content: center;

  ${(props) =>
    props.$isLarge &&
    css`
      min-width: 150px;
      font-size: ${rem(16)};
      padding: 17px 25px;
    `};
`;

interface Props {
  children: string;
  to: string;
  isLarge?: boolean;
  isSecondary?: boolean;
}

const CtaButton = ({ children, to, isLarge, isSecondary }: Props) => {
  const characters = [...children];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Wrapper onClick={handleClick} $isSecondary={isSecondary}>
      <CharacterWrapper $isLarge={isLarge}>
        {characters.map((char, i) => (
          <Character
            key={i}
            data-char={char}
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
