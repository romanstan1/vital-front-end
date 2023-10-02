import { ChangeEvent } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";
import { P2 } from "../../styles/typography";
import CollectionMethod from "./CollectionMethod";
import { TestKitType } from "../../types";

const StepOneContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  height: 100%;
`;

const Label = styled(P2)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  color: ${COLORS.tableGray};
  margin-bottom: 0px;
  padding: 0;
`;

const PanelNameInput = styled.input`
  background: ${COLORS.activeGray01};
  outline: none;
  border: 0px;
  border-radius: 2px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  min-height: 48px;
  width: calc(100% - 20px);
  display: block;
  margin: 5px 0;
  width: 280px;
  font-size: 16px;
  border: 1px solid ${COLORS.activeGray01};
  color: ${COLORS.black};
  margin-bottom: 20px;

  &:focus {
    border: 1px solid ${COLORS.activeBlue07};
  }
  &:hover {
    background: ${COLORS.activeGray02};
  }
`;

interface StepOneProps {
  handleNameInput(e: ChangeEvent<HTMLInputElement>): void;
  panelName: string;
  handleCollectionMethodUpdate(type: TestKitType): void;
  testKit?: TestKitType;
}

const StepOne = ({
  handleNameInput,
  panelName,
  handleCollectionMethodUpdate,
  testKit,
}: StepOneProps) => {
  return (
    <StepOneContent>
      <Label>Name your panel</Label>
      <PanelNameInput
        onChange={handleNameInput}
        placeholder="My awesome panel"
        value={panelName}
      />
      <Label>Choose your collection method</Label>
      <CollectionMethod
        onClick={handleCollectionMethodUpdate}
        method={testKit}
      />
    </StepOneContent>
  );
};
export default StepOne;
