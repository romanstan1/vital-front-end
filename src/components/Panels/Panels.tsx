import styled from "styled-components";
import data from "./biomarker-data.json";
import ContentHeading from "../ContentHeading";
import Button from "../Button";
import { useModal, ModalTypes } from "../../contexts/ModalContext";

const HeadingBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Panels = () => {
  // console.log("data", data);

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
        <Button onClick={handleAddPanel}>Add panel</Button>
      </HeadingBar>
    </>
  );
};

export default Panels;
