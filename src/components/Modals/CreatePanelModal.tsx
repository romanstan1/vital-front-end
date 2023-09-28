import React, { useState } from "react";
import styled, { css } from "styled-components";
import COLORS from "../../styles/colors";
import CrossSVG from "../../assets/cross.svg?react";
import { BiomarkerData, Marker } from "../../types";
import { H2, P1, P2, L2, L3 } from "../../styles/typography";
import Button from "../Button";

const Wrapper = styled.div`
  max-width: 780px;
  width: 90%;
  max-height: 720px;
  height: 80%;

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
`;

interface CreatePanelModalProps {
  handleClose(): void;
  data: BiomarkerData;
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
const RemoveItemCross = styled(CrossSVG)`
  right: 8px;
  top: 50%;
  transform: translate(0%, -50%);
  position: absolute;
  transition: 0.1s ease;
  cursor: pointer;
  height: 15px;
  width: 15px;
  fill: white;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 5px 15px;
  position: relative;
  background: ${COLORS.panelGray};
  border-bottom: 1px solid ${COLORS.lightGray};
`;

const Header = styled.div`
  display: flex;
  padding: 10px 20px 20px 20px;
`;

const HeadingCell = styled.div<{ $inActive?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${(props) =>
    props.$inActive &&
    css`
      opacity: 0.4;
    `};
`;
const StepWrapper = styled(L3)`
  font-weight: 500;
  margin-bottom: 5px;
`;

const Heading = styled(H2)`
  padding: 0 20px 20px 20px;
`;

const Subheading = styled(P1)`
  /* text-align: center; */
`;

const FilterInput = styled.input`
  background: ${COLORS.activeGray01};
  outline: none;
  border: 0px;
  border-radius: 4px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  border-color: ${COLORS.activeGray01};
  min-height: 35px;
  width: calc(100% - 20px);
  display: block;
  margin: 10px;
  &:hover {
    background: ${COLORS.activeGray02};
  }
`;

const PanelNameInput = styled(FilterInput)`
  width: 300px;
`;

const Label = styled.label``;

const BiomarkerLineItem = styled.div<{ $selected?: boolean }>`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 4px;
  margin: 1px 0;
  cursor: pointer;
  user-select: none;
  position: relative;
  &:hover {
    background: ${COLORS.activeGray01};
  }
  svg {
    opacity: 0;
  }
  ${(props) =>
    props.$selected &&
    css`
      background: ${COLORS.activeBlue};
      color: ${COLORS.white};
      opacity: 0.9;
      &:hover {
        background: ${COLORS.activeBlue};
        svg {
          opacity: 1;
        }
      }
    `};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  padding: 10px;
  height: 100%;
  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: ${COLORS.panelGray};
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${COLORS.panelGray};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: ${COLORS.activeGray02};
  }
`;
const ContinueButton = styled(Button)`
  position: absolute;
  right: 20px;
  top: 15px;
`;
const BackButton = styled(Button)`
  position: absolute;
  left: 20px;
  top: 15px;
`;

const TableWrapper = styled.div`
  background: ${COLORS.panelGray};
  border-top: 1px solid ${COLORS.lightGray};
`;

const ButtonBar = styled.div`
  min-height: 71px;
  padding: 15px;
  background: ${COLORS.panelGray};
  border-top: 1px solid ${COLORS.lightGray};
  position: relative;
  width: 100%;
`;

const Cell = styled(P2)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CreatePanelModal: React.FC<CreatePanelModalProps> = ({
  handleClose,
  data: bioMarkerData,
}: CreatePanelModalProps) => {
  const [biomarkers, setBiomarkers] = useState<Marker[]>(bioMarkerData.markers);
  const [selectedBiomarkers, setSelectedBiomarkers] = useState<Marker[]>([]);
  const [step, setStep] = useState<number>(0);

  const handleClick = (marker: Marker) => {
    const exists = selectedBiomarkers.find((bm) => bm.id === marker.id);
    if (exists)
      setSelectedBiomarkers((markers) =>
        markers.filter((mk) => {
          return mk.id !== marker.id;
        })
      );
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

  const handleFilter = (e: any) => {
    filterByValue(e.target.value);
  };

  // const arrayOfObject = [
  //   { name: "Paul", country: "Canada" },
  //   { name: "Lea", country: "Italy" },
  //   { name: "John", country: "Italy" },
  // ];

  // console.log(filterByValue(arrayOfObject, "lea")); // [{name: 'Lea', country: 'Italy'}]
  // console.log(filterByValue(arrayOfObject, "ita"));
  const handleNextStep = () => {
    setStep(1);
  };
  const handleBackStep = () => {
    setStep(0);
  };

  const step0markup = step === 0 && (
    <>
      <TableWrapper>
        <FilterInput
          onChange={handleFilter}
          placeholder="Filter by name or description"
        />
        <TableHeader>
          <Cell>Name</Cell>
          <Cell>Description</Cell>
        </TableHeader>
      </TableWrapper>
      <ContentInner>
        {biomarkers.map((marker) => {
          return (
            <BiomarkerLineItem
              key={marker.id}
              $selected={Boolean(
                selectedBiomarkers.find((bm) => bm.id === marker.id)
              )}
              onClick={() => handleClick(marker)}
            >
              <Cell>{marker.name}</Cell>
              <Cell>{marker.description}</Cell>
              <RemoveItemCross />
            </BiomarkerLineItem>
          );
        })}
      </ContentInner>
    </>
  );

  const step1markup = step === 1 && (
    <>
      <Label>Name your panel</Label>
      <PanelNameInput onChange={handleFilter} placeholder="My awesome panel" />
      <TableWrapper>
        <TableHeader>
          <Cell>Name</Cell>
          <Cell>Description</Cell>
        </TableHeader>
      </TableWrapper>
      <ContentInner>
        {selectedBiomarkers.map((marker) => {
          return (
            <BiomarkerLineItem
              key={marker.id}
              $selected
              onClick={() => handleClick(marker)}
            >
              <Cell>{marker.name}</Cell>
              <Cell>{marker.description}</Cell>
              <RemoveItemCross />
            </BiomarkerLineItem>
          );
        })}
      </ContentInner>
    </>
  );

  return (
    <Wrapper>
      <CloseButton onClick={handleClose}>
        <CrossSVG />
      </CloseButton>
      <Content>
        <Heading>Create a panel</Heading>
        <Header>
          {step === 0 && (
            <HeadingCell>
              <StepWrapper>STEP 1</StepWrapper>
              <Subheading>Choose your biomarkers</Subheading>
            </HeadingCell>
          )}
          {step === 1 && (
            <HeadingCell>
              <StepWrapper>STEP 2</StepWrapper>
              <Subheading>Name and confirm</Subheading>
            </HeadingCell>
          )}
        </Header>
        {step0markup}
        {step1markup}
        <ButtonBar>
          {step === 1 && (
            <BackButton onClick={handleBackStep} isSecondary>
              Back
            </BackButton>
          )}
          {step === 1 && (
            <ContinueButton onClick={handleNextStep}>
              Create panel
            </ContinueButton>
          )}
          {step === 0 && selectedBiomarkers.length > 0 && (
            <ContinueButton onClick={handleNextStep}>
              Add {selectedBiomarkers.length} biomarker
              {selectedBiomarkers.length > 1 ? "s" : ""}
            </ContinueButton>
          )}
        </ButtonBar>
      </Content>
    </Wrapper>
  );
};

export default CreatePanelModal;
