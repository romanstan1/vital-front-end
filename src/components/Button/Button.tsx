import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { L3 } from "../../styles/typography";
import PlusSVG from "../../assets/plus.svg?react";
import COLORS from "../../styles/colors";

interface StyleProps {
  $isSecondary?: boolean;
  $isBlue?: boolean;
  $isDisabled?: boolean;
}

const Wrapper = styled.div<StyleProps>`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.activeBlue09};
  border-radius: 1px;
  height: 42px;
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
        background: ${COLORS.lightGray} !important;
        color: ${COLORS.activeGray01};
        opacity: 1;
      }
    `};

  ${(props) =>
    props.$isDisabled &&
    css`
      opacity: 0.5 !important;
      pointer-events: none;
    `};

  &:hover {
    background: ${COLORS.activeBlue};
  }
`;

const Text = styled(L3)<StyleProps>`
  font-size: 13px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
  /* text-transform: uppercase; */
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
  isDisabled?: boolean;
  isBlue?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  hasPlusIcon,
  isSecondary,
  isDisabled,
  isBlue,
}: ButtonProps) => {
  return (
    <Wrapper
      onClick={onClick}
      className={className}
      $isDisabled={isDisabled}
      $isSecondary={isSecondary}
      $isBlue={isBlue}
    >
      {hasPlusIcon && <PlusIcon />}
      <Text $isSecondary={isSecondary}>{children}</Text>
    </Wrapper>
  );
};

export default Button;
