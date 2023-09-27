import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";
import CrossSVG from "../../assets/cross.svg?react";

const Wrapper = styled.div`
  max-width: 700px;
  width: 90%;
  max-height: 640px;
  height: 70%;

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
`;

interface CreatePanelModalProps {
  handleClose(): void;
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
    background: ${COLORS.buttonActiveGray};
  }
  svg {
    height: 18px;
    width: 18px;
  }
`;

const CreatePanelModal: React.FC<CreatePanelModalProps> = ({
  handleClose,
}: CreatePanelModalProps) => {
  return (
    <Wrapper>
      <CloseButton onClick={handleClose}>
        <CrossSVG />
      </CloseButton>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </Wrapper>
  );
};

export default CreatePanelModal;
