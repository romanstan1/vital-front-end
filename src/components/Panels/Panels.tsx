import styled from "styled-components";
import data from "./biomarker-data.json";
import { SIDEPANEL_WIDTH } from "../SidePanel";

const Wrapper = styled.div`
  left: ${SIDEPANEL_WIDTH}px;
  position: absolute;
  top: 0;
  width: calc(100% - ${SIDEPANEL_WIDTH}px);
`;

const Button = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border: 1px solid grey;
  display: inline-block;
`;

const Panels = () => {
  console.log("data", data);

  return (
    <Wrapper>
      <Button
        onClick={() => {
          // getMarkers();
        }}
      >
        Get markers
      </Button>
    </Wrapper>
  );
};

export default Panels;
