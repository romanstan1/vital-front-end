import { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";

import COLORS from "../../styles/colors";
import HomeSVG from "../../assets/home.svg?react";
import UsersSVG from "../../assets/users.svg?react";
import MenuItem from "./MenuItem";
import { ActiveItems } from "./types";

const Wrapper = styled.div`
  width: 250px;
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

const SidePanel = () => {
  const [active, setActive] = useState<ActiveItems>(ActiveItems.Dashboard);

  const handleClick = (label: ActiveItems) => {
    setActive(label);
  };
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
      </Section>
    </Wrapper>
  );
};

export default SidePanel;
