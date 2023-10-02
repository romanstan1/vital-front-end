import styled from "styled-components";

import COLORS from "../../styles/colors";
import { L2, H2 } from "../../styles/typography";
import { Marker, TestKitType } from "../../types";
import BiomarkerPills from "../BiomarkerPills";

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 10px 20px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;

  background: ${COLORS.panelGray};
  border-left: 1px solid ${COLORS.lightGray};
`;

const Label = styled(L2)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 0px;
  padding: 0;
`;

const MainLabel = styled(H2)`
  font-size: 19px;
  font-weight: 700;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 20px;
`;

const Text = styled(L2)`
  font-weight: 400;
  font-size: 14px;
`;

const LabelTextItem = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  /* grid-template-columns: 140px 1fr;
  justify-content: flex-start;
  align-items: center; */
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
          <Label>Biomarkers ({biomarkers.length} selected)</Label>
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
