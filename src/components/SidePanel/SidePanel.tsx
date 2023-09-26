import styled from "styled-components";
import Logo from "../Logo";

import COLORS from "../../styles/colors";
import HomeSVG from "../../assets/home.svg?react";
import UsersSVG from "../../assets/users.svg?react";
import PanelsSVG from "../../assets/panels.svg?react";
import MenuItem from "./MenuItem";
import { ActiveItems } from "../../types";

export const SIDEPANEL_WIDTH = 250; // pixels

const Wrapper = styled.div`
  width: ${SIDEPANEL_WIDTH}px;
  height: 100vh;
  padding-top: 8px;
  border-right: 1px solid ${COLORS.lightGray};
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`;

const Section = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

interface SidePanelProps {
  active: ActiveItems;
  handleClick(label: ActiveItems): void;
}

const SidePanel = ({ active, handleClick }: SidePanelProps) => {
  return (
    <Wrapper>
      <Logo />
      <Section>
        <MenuItem
          icon={<HomeSVG />}
          iconType="stroke"
          label={ActiveItems.Dashboard}
          active={active === ActiveItems.Dashboard}
          handleClick={() => handleClick(ActiveItems.Dashboard)}
        />
        <MenuItem
          icon={<UsersSVG />}
          iconType="fill"
          label={ActiveItems.Users}
          active={active === ActiveItems.Users}
          handleClick={() => handleClick(ActiveItems.Users)}
        />
        <MenuItem
          icon={<PanelsSVG />}
          iconType="fill"
          label={ActiveItems.Panels}
          active={active === ActiveItems.Panels}
          handleClick={() => handleClick(ActiveItems.Panels)}
        />
      </Section>
    </Wrapper>
  );
};

export default SidePanel;
