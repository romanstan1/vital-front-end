import styled, { css } from "styled-components";

import COLORS from "../../styles/colors";
import { L2 } from "../../styles/typography";
import { ActiveItems } from "./types";

type IconType = "fill" | "stroke";

interface WrapperProps {
  $active?: boolean;
  $iconType: IconType;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 24px;
  cursor: pointer;
  p {
    color: ${COLORS.midGray};
  }

  ${(props) =>
    props.$iconType === "fill" &&
    css`
      svg {
        fill: ${COLORS.midGray};
      }
      &:hover {
        svg {
          fill: ${COLORS.hoverBlack};
        }
      }
    `};

  ${(props) =>
    props.$iconType === "stroke" &&
    css`
      svg {
        stroke: ${COLORS.midGray};
      }
      &:hover {
        svg {
          stroke: ${COLORS.hoverBlack};
        }
      }
    `};

  &:hover {
    p {
      color: ${COLORS.hoverBlack};
    }
  }

  ${(props) =>
    props.$active &&
    css`
      border-left: 3px solid ${COLORS.activeBlue};
      background: ${COLORS.midLightGray};
      && p {
        color: ${COLORS.activeBlue};
      }

      ${(props) =>
        props.$iconType === "stroke" &&
        css`
          && svg {
            stroke: ${COLORS.activeBlue};
          }
        `};
      ${(props) =>
        props.$iconType === "fill" &&
        css`
          && svg {
            fill: ${COLORS.activeBlue};
          }
        `};
    `};
`;

const LabelWrapper = styled(L2)`
  display: block;
  margin-left: 8px;
  padding-left: 4px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
  }
`;

interface MenuItemProps {
  icon: ReactElement<IconProps>;
  label: ActiveItems;
  iconType: IconType;
  active?: boolean;
  handleClick(label: ActiveItems): void;
}

const MenuItem = ({
  icon,
  label,
  iconType,
  active,
  handleClick,
}: MenuItemProps) => {
  return (
    <Wrapper
      $active={active}
      $iconType={iconType}
      onClick={() => handleClick(label)}
    >
      <IconWrapper>{icon}</IconWrapper>
      <LabelWrapper>{label}</LabelWrapper>
    </Wrapper>
  );
};

export default MenuItem;
