import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../styles/colors";

const Wrapper = styled.div`
  max-width: 512px;
  width: 90%;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${COLORS.white};

  border-radius: 4px;
  overflow: hidden;
`;

interface CreatePanelModalProps {
  handleClose(): void;
}

const CreatePanelModal: React.FC<CreatePanelModalProps> = ({
  handleClose,
}: CreatePanelModalProps) => {
  return (
    <Wrapper>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </Wrapper>
  );
};

export default CreatePanelModal;
