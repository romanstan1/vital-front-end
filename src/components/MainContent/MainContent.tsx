import styled from "styled-components";

import { SIDEPANEL_WIDTH } from "../SidePanel";
import COLORS from "../../styles/colors";
import { ActiveItems } from "../../types";
import Panels from "../Panels";
import Users from "../Users";
import Dashboard from "../Dashboard";

const Wrapper = styled.div`
  margin-left: ${SIDEPANEL_WIDTH}px;
  width: calc(100vw - ${SIDEPANEL_WIDTH}px);
  height: 100vh;
  background: ${COLORS.panelGray};
  padding: 16px;
`;

interface MainContentProps {
  active: ActiveItems;
}

const MainContent = ({ active }: MainContentProps) => {
  return (
    <Wrapper>
      {active === ActiveItems.Dashboard && <Dashboard />}
      {active === ActiveItems.Users && <Users />}
      {active === ActiveItems.Panels && <Panels />}
    </Wrapper>
  );
};

export default MainContent;
