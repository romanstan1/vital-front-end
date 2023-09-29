import styled, { css } from "styled-components";
import { L3 } from "../../styles/typography";
import PlusSVG from "../../assets/plus.svg?react";
import COLORS from "../../styles/colors";
import { ReactNode } from "react";

interface StyleProps {
  $isSecondary?: boolean;
  $isBlue?: boolean;
}

const Wrapper = styled.div<StyleProps>`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 0.375rem;
  height: 40px;
  opacity: 1;
  cursor: pointer;
  transition: 0.2s ease;
  ${(props) =>
    props.$isSecondary &&
    css`
      border: 1px solid ${COLORS.lightGray};
      background: ${COLORS.white};
      color: ${COLORS.lightGray};
      &:hover {
        background: ${COLORS.lightGray};
        color: ${COLORS.activeGray01};
        opacity: 1;
      }
    `};
  ${(props) =>
    props.$isBlue &&
    css`
      background: ${COLORS.activeBlue};
      &:hover {
        background: ${COLORS.activeBlue};
        opacity: 0.95;
      }
    `};
  &:hover {
    opacity: 0.6;
  }
`;

const Text = styled(L3)<StyleProps>`
  font-size: 10px;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  ${(props) =>
    props.$isSecondary &&
    css`
      color: ${COLORS.black};
    `};
`;

const PlusIcon = styled(PlusSVG)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  path {
    fill: white;
  }
`;

interface ButtonProps {
  children: ReactNode;
  onClick(): void;
  className?: string;
  hasPlusIcon?: boolean;
  isSecondary?: boolean;
  isBlue?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  hasPlusIcon,
  isSecondary,
  isBlue,
}: ButtonProps) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      $isSecondary={isSecondary}
      $isBlue={isBlue}
    >
      {hasPlusIcon && <PlusIcon />}
      <Text $isSecondary={isSecondary}>{children}</Text>
    </Wrapper>
  );
};

export default Button;
