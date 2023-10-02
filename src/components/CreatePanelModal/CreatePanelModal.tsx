import { useEffect, useState, ChangeEvent } from "react";
import styled, { css } from "styled-components";

import COLORS from "../../styles/colors";
import CrossSVG from "../../assets/cross.svg?react";
import { BiomarkerData, Marker, TestKitType, Panel } from "../../types";
import { H2 } from "../../styles/typography";
import Button from "../Button";
import SummarySection from "./SummarySection";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import data from "./biomarker-data.json";
import { usePanels } from "../../contexts/PanelContext";

const Wrapper = styled.div<{ $isLarge?: boolean }>`
  max-width: 600px;
  width: 90%;
  max-height: 400px;
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
    props.$isLarge &&
    css`
      max-height: 720px;
      max-width: 900px;
    `};
`;

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
  border-radius: 1px;
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

const StepLabel = styled.div`
  color: ${COLORS.midGray};
  font-weight: 600;
  font-size: 10px;
  font-weight: 700;
  span {
    /* background: rgb(49, 23, 219); */
    color: ${COLORS.activeBlue09};
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid ${COLORS.activeBlue09};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  div {
    background: ${COLORS.activeBlue09};
    border-radius: 100%;
    width: 28px;
    height: 28px;
  }
`;

const Heading = styled(H2)`
  font-size: 19px;
  font-weight: 700;
  text-align: left;
`;

const HeadingWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 20px 20px 20px;
  /* border-bottom: 3px solid ${COLORS.lightGray}; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CtaButton = styled(Button)`
  /* position: absolute; */
  display: inline-flex;
`;

const BackButton = styled(Button)`
  display: inline-flex;

  /* left: 20px;
  bottom: 15px; */
`;

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 15px 15px 15px 15px;
  background: ${COLORS.panelGray};
  position: relative;
  border-top: 1px solid ${COLORS.lightGray};
  width: 100%;
`;

const options = {
  method: "GET",
  headers: {
    "x-vital-api-key": "sk_us_xqfTe7ceyptcTDOKOF3jXRik7dBqEPnmD5cL4POFlPE",
  },
};

interface CreatePanelModalProps {
  handleClose(): void;
}

const CreatePanelModal = ({ handleClose }: CreatePanelModalProps) => {
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
  const { addPanel } = usePanels();

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
    if (panelName && testKit && selectedBiomarkers.length > 0) {
      const newPanel: Panel = {
        name: panelName,
        testKitType: testKit,
        markers: selectedBiomarkers,
      };
      addPanel(newPanel);
      handleClose();
    }
  };

  return (
    <Wrapper $isLarge={step === 1}>
      <CloseButton onClick={handleClose}>
        <CrossSVG />
      </CloseButton>
      <Content>
        <HeadingWrapper>
          <IconWrapper>
            <div></div>
          </IconWrapper>
          <HeadingWrapperInner>
            <StepLabel>
              <span>STEP {step + 1} /</span> 2
            </StepLabel>
            <Heading>
              {step === 0 ? "Panel Details" : "Select Biomarkers"}
            </Heading>
          </HeadingWrapperInner>
        </HeadingWrapper>
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
        {step === 1 && (
          <SummarySection
            panelName={panelName}
            testKitMethod={testKit}
            biomarkers={selectedBiomarkers}
            handleRemoveBiomarker={handleRemoveBiomarker}
          />
        )}
        <ButtonBar>
          {step === 0 && (
            <CtaButton
              isDisabled={panelName.length === 0 || !testKit}
              onClick={handleNextStep}
            >
              Continue
            </CtaButton>
          )}

          {step === 1 && (
            <>
              <CtaButton
                onClick={handleCreatePanel}
                isDisabled={selectedBiomarkers.length === 0}
              >
                Create panel
              </CtaButton>
              <BackButton onClick={handleBackStep} isSecondary>
                Back
              </BackButton>
            </>
          )}
        </ButtonBar>
      </Content>
    </Wrapper>
  );
};

export default CreatePanelModal;
