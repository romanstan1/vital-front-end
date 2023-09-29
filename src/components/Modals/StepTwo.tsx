import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import COLORS from "../../styles/colors";
import { P2 } from "../../styles/typography";
import { Marker } from "../../types";
import CrossSVG from "../../assets/cross.svg?react";

const FilterInput = styled.input`
  background: ${COLORS.activeGray01};
  outline: none;
  border: 0px;
  border-radius: 4px;
  padding-inline-start: 10px;
  padding-inline-end: 15px;
  border-color: ${COLORS.activeGray01};
  min-height: 35px;
  width: 500px;
  display: block;
  margin: 12px 0 10px 20px;
  &:hover {
    background: ${COLORS.activeGray02};
  }
`;

const TableWrapper = styled.div``;

const Label = styled(P2)`
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.black};
  margin: 20px 0px 5px 20px;
`;

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 15px 15px;
  overflow-y: scroll;
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
      background: ${COLORS.black};
      color: ${COLORS.white};
      &:hover {
        background: ${COLORS.black};
        svg {
          opacity: 1;
        }
      }
    `};
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
  padding: 5px 20px;
  position: relative;
  margin-bottom: -5px;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    content: "";
    z-index: 2;
    background: red;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }
`;

interface StepTwoProps {
  biomarkers: Marker[];
  selectedBiomarkers: Marker[];
  handleFilter(e: ChangeEvent<HTMLInputElement>): void;
  handleClickBiomarker(marker: Marker): void;
}

const StepTwo = ({
  biomarkers,
  selectedBiomarkers,
  handleFilter,
  handleClickBiomarker,
}: StepTwoProps) => {
  return (
    <>
      <TableWrapper>
        <Label>Choose biomarkers</Label>
        <FilterInput
          onChange={handleFilter}
          placeholder="Filter by name or description"
        />
        <TableHeader>
          <HeadingCell>Name</HeadingCell>
          <HeadingCell>Description</HeadingCell>
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
              onClick={() => handleClickBiomarker(marker)}
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
};
export default StepTwo;
