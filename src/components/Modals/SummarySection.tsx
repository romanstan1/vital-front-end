import React from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";
import { TestKitType } from "./CollectionMethod";
import { L2, L3, P2 } from "../../styles/typography";
import { Marker } from "../../types";
import BiomarkerPills from "./BiomarkerPills";

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  background: ${COLORS.panelGray};
  border-top: 1px solid ${COLORS.lightGray};
`;

const Label = styled(L3)`
  font-size: 10px;
  text-transform: uppercase;
  color: ${COLORS.midGray};
`;
const MainLabel = styled(L2)`
  font-size: 10px;
  text-transform: uppercase;
  color: ${COLORS.midGray};
`;
const Text = styled(P2)``;

const LabelTextItem = styled.div`
  padding: 5px 0;
  display: grid;
  grid-template-columns: 200px 1fr;
`;

interface Props {
  testKitMethod?: TestKitType;
  panelName: string;
  biomarkers: Marker[];
  handleRemoveBiomarker(id: number): void;
}

const SummarySection = ({
  panelName,
  testKitMethod,
  biomarkers,
  handleRemoveBiomarker,
}: Props) => {
  return (
    <SummaryWrapper>
      <MainLabel>Summary</MainLabel>
      {panelName && (
        <LabelTextItem>
          <Label>Panel name</Label>
          <Text>{panelName}</Text>
        </LabelTextItem>
      )}
      {testKitMethod && (
        <LabelTextItem>
          <Label>Collection method</Label>
          <Text>{testKitMethod}</Text>
        </LabelTextItem>
      )}
      {biomarkers.length > 0 && (
        <LabelTextItem>
          <Label>Biomarkers</Label>
          <BiomarkerPills
            biomarkers={biomarkers}
            handleRemove={handleRemoveBiomarker}
          />
        </LabelTextItem>
      )}
    </SummaryWrapper>
  );
};
export default SummarySection;
