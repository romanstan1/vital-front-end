import { ChangeEvent } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";
import { P2 } from "../../styles/typography";
import CollectionMethod from "./CollectionMethod";
import { TestKitType } from "../../types";

const StepOneContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  height: 100%;
`;

const Label = styled(P2)`
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.black};
  margin-top: 8px;
  margin-bottom: 2px;
  padding: 0;
`;

const PanelNameInput = styled.input`
  background: ${COLORS.activeGray01};
  outline: none;
  border: 0px;
  border-radius: 4px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  min-height: 42px;
  width: calc(100% - 20px);
  display: block;
  margin: 10px 0;
  width: 280px;
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
