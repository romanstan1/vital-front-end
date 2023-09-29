import styled from "styled-components";

import COLORS from "../../styles/colors";
import { L2 } from "../../styles/typography";
import { Marker, TestKitType } from "../../types";
import BiomarkerPills from "../BiomarkerPills";

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 20px;
  width: 100%;
  background: ${COLORS.panelGray};
  border-top: 1px solid ${COLORS.lightGray};
`;

const Label = styled(L2)`
  font-weight: 600;
  font-size: 14px;
`;
const MainLabel = styled(L2)`
  font-size: 10px;
  text-transform: uppercase;
  color: ${COLORS.midGray};
`;
const Text = styled(L2)`
  font-weight: 400;
  font-size: 14px;
`;

const LabelTextItem = styled.div`
  padding: 5px 0;
  display: grid;
  grid-template-columns: 140px 1fr;
  justify-content: flex-start;
  align-items: center;
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
