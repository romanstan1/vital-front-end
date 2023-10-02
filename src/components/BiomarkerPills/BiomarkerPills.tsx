import styled, { css } from "styled-components";

import CrossSVG from "../../assets/cross.svg?react";
import COLORS from "../../styles/colors";
import { Marker } from "../../types";
import { L3 } from "../../styles/typography";

const Wrapper = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const PillWrapper = styled.div<{ $canClick?: boolean }>`
  padding: 5px 8px 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  gap: 5px;
  background: ${COLORS.black};
  color: ${COLORS.white};
  transition: 0.1s ease;
  ${(props) =>
    props.$canClick &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    `};
`;

const PillText = styled(L3)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  max-width: 200px;
  padding: 0;
`;

const CloseIcon = styled(CrossSVG)`
  width: 14px;
  height: 14px;
`;

interface PillProps {
  marker: Marker;
  handleRemove?(id: number): void;
}
const Pill = ({ marker, handleRemove }: PillProps) => {
  return (
    <PillWrapper
      $canClick={Boolean(handleRemove)}
      onClick={() => {
        if (handleRemove) handleRemove(marker.id);
      }}
    >
      <PillText>{marker.name}</PillText>
      {handleRemove && <CloseIcon />}
    </PillWrapper>
  );
};

interface Props {
  biomarkers: Marker[];
  handleRemove?(id: number): void;
}

const BiomarkerPills = ({ biomarkers, handleRemove }: Props) => {
  return (
    <Wrapper>
      {biomarkers.map((marker) => {
        return (
          <Pill key={marker.id} marker={marker} handleRemove={handleRemove} />
        );
      })}
    </Wrapper>
  );
};

export default BiomarkerPills;
