import styled from "styled-components";

import ContentHeading from "../ContentHeading";
import PanelsTable from "./PanelsTable";
import Button from "../Button";
import { useModal, ModalTypes } from "../../contexts/ModalContext";

const HeadingBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Panels = () => {
  const { setModal } = useModal();

  const handleAddPanel = () => {
    setModal({
      isOpen: true,
      type: ModalTypes.CREATE_PANEL,
    });
  };

  return (
    <>
      <ContentHeading
        heading="Panels"
        subheading="A list of your team's created panels"
      />
      <HeadingBar>
        <Button onClick={handleAddPanel} hasPlusIcon>
          Add panel
        </Button>
      </HeadingBar>
      <PanelsTable />
    </>
  );
};

export default Panels;
