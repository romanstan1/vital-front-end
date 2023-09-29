import React, { useEffect, useState, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import COLORS from "../../styles/colors";
import CrossSVG from "../../assets/cross.svg?react";
import { BiomarkerData, Marker } from "../../types";
import { H2, P1, P2, L3 } from "../../styles/typography";
import Button from "../Button";
import CollectionMethod, { TestKitType } from "./CollectionMethod";
import SummarySection from "./SummarySection";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import data from "./biomarker-data.json";

const Wrapper = styled.div<{ $isTall?: boolean }>`
  max-width: 600px;
  width: 90%;
  max-height: 520px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${COLORS.white};
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  padding: 20px 0px 0px 0px;
  transition: max-height, max-width, 0.3s ease;
  ${(props) =>
    props.$isTall &&
    css`
      max-height: 720px;
      max-width: 780px;
    `};
`;

interface CreatePanelModalProps {
  handleClose(): void;
  // data: BiomarkerData;
}

const CloseButton = styled.div`
  right: 10px;
  top: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background: ${COLORS.activeGray01};
  }
  svg {
    height: 18px;
    width: 18px;
  }
`;

const Heading = styled(H2)`
  padding: 0 20px 20px 20px;
  text-align: left;
  border-bottom: 1px solid ${COLORS.lightGray};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContinueButton = styled(Button)`
  position: absolute;
  right: 20px;
  bottom: 15px;
`;

const BackButton = styled(Button)`
  position: absolute;
  left: 20px;
  bottom: 15px;
`;

const ButtonBar = styled.div`
  min-height: 60px;
  padding: 5px 15px 15px 15px;
  background: ${COLORS.panelGray};
  position: relative;
  width: 100%;
`;

const Cell = styled(P2)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeadingCell = styled(Cell)`
  font-size: 10px;
  text-transform: uppercase;
  color: ${COLORS.midGray};
`;

const options = {
  method: "GET",
  headers: {
    "x-vital-api-key": "sk_us_xqfTe7ceyptcTDOKOF3jXRik7dBqEPnmD5cL4POFlPE",
  },
};

const CreatePanelModal: React.FC<CreatePanelModalProps> = ({
  handleClose,
}: CreatePanelModalProps) => {
  const [bioMarkerData, setBioMarkerData] = useState<BiomarkerData>({
    page: 0,
    size: 0,
    total: 0,
    markers: [],
  });

  const [biomarkers, setBiomarkers] = useState<Marker[]>([]);
  const [panelName, setPanelName] = useState<string>("");
  const [testKit, setTestKit] = useState<TestKitType | undefined>(undefined);
  const [selectedBiomarkers, setSelectedBiomarkers] = useState<Marker[]>([]);
  const [step, setStep] = useState<number>(0);

  const handleNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPanelName(e.target.value);
  };

  const handleRemoveBiomarker = (markerId: number) => {
    setSelectedBiomarkers((markers) =>
      markers.filter((mk) => {
        return mk.id !== markerId;
      })
    );
  };

  const handleClickBiomarker = (marker: Marker) => {
    const exists = selectedBiomarkers.find((bm) => bm.id === marker.id);
    if (exists) handleRemoveBiomarker(marker.id);
    else setSelectedBiomarkers((markers) => [...markers, marker]);
  };

  const filterByValue = (text: string) => {
    const filteredVals = bioMarkerData.markers.filter((bm) => {
      return (
        bm.name.toLowerCase().includes(text.toLowerCase()) ||
        bm.description.toLowerCase().includes(text.toLowerCase())
      );
    });

    setBiomarkers(filteredVals);
  };

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    filterByValue(e.target.value);
  };
  const handleCollectionMethodUpdate = (type: TestKitType) => {
    setTestKit(type);
  };

  useEffect(() => {
    fetch("https://api.sandbox.tryvital.io/v3/lab_tests/markers", options)
      .then((response) => response.json())
      .then((response) => {
        setBioMarkerData(response);
      })
      .catch(() => {
        // Since there is a CORS error when accessing the biomarker api from the FE, the biomarker data is set with mocked data on error.
        setBioMarkerData(data);
      });
  }, []);
  useEffect(() => {
    if (step === 0) setSelectedBiomarkers([]); // reset seleted if you go back to step 0
  }, [step]);

  useEffect(() => {
    setBiomarkers(bioMarkerData.markers);
  }, [bioMarkerData]);

  const handleNextStep = () => {
    setStep(1);
  };
  const handleBackStep = () => {
    setStep(0);
  };
  const handleCreatePanel = () => {
    //
  };

  const summaryBarExists = panelName.length > 0 || testKit;

  return (
    <Wrapper $isTall={step === 1}>
      <CloseButton onClick={handleClose}>
        <CrossSVG />
      </CloseButton>
      <Content>
        <Heading>Create a panel</Heading>
        {step === 0 && (
          <StepOne
            handleNameInput={handleNameInput}
            panelName={panelName}
            handleCollectionMethodUpdate={handleCollectionMethodUpdate}
            testKit={testKit}
          />
        )}
        {step === 1 && (
          <StepTwo
            biomarkers={biomarkers}
            selectedBiomarkers={selectedBiomarkers}
            handleFilter={handleFilter}
            handleClickBiomarker={handleClickBiomarker}
          />
        )}

        {summaryBarExists && (
          <SummarySection
            panelName={panelName}
            testKitMethod={testKit}
            biomarkers={selectedBiomarkers}
            handleRemoveBiomarker={handleRemoveBiomarker}
          />
        )}

        {summaryBarExists && (
          <ButtonBar>
            {step === 1 && (
              <BackButton onClick={handleBackStep} isSecondary>
                Back
              </BackButton>
            )}
            {step === 1 && (
              <>
                <ContinueButton onClick={handleCreatePanel}>
                  Create panel
                </ContinueButton>
              </>
            )}
            {step === 0 && panelName.length > 0 && testKit && (
              <ContinueButton onClick={handleNextStep}>Continue</ContinueButton>
            )}
          </ButtonBar>
        )}
      </Content>
    </Wrapper>
  );
};

export default CreatePanelModal;
