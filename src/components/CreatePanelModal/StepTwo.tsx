import { ChangeEvent } from "react";
import styled, { css } from "styled-components";

import COLORS from "../../styles/colors";
import { P2 } from "../../styles/typography";
import { Marker } from "../../types";
import CrossSVG from "../../assets/cross.svg?react";

const FilterInput = styled.input`
  background: ${COLORS.activeGray01};
  outline: none;
  border: 0px;
  border-radius: 2px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  min-height: 40px;
  width: calc(100% - 32px);
  display: block;
  margin: 5px 0;
  font-size: 14px;
  border: 1px solid ${COLORS.activeGray01};
  color: ${COLORS.black};
  margin: 12px 0 10px 15px;

  &:focus {
    border: 1px solid ${COLORS.activeBlue07};
  }
  &:hover {
    background: ${COLORS.activeGray02};
  }
`;

const TableWrapper = styled.div`
  width: calc(100% - 300px);
`;

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
  width: calc(100% - 300px);

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
  border-radius: 1px;
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
  font-weight: 600;
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
  padding: 5px 2px;
  position: relative;
  margin: 0 15px;
  /* margin-bottom: -5px; */
  border-bottom: 1px solid ${COLORS.lightGray};

  /* &::after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    content: "";
    z-index: 2;
    background: red;
    /* background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); */
  /* } */
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
