import styled from "styled-components";
import data from "./biomarker-data.json";
import ContentHeading from "../ContentHeading";
import Button from "../Button";

const HeadingBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Panels = () => {
  console.log("data", data);

  return (
    <>
      <ContentHeading
        heading="Panels"
        subheading="A list of your team's created panels"
      />
      <HeadingBar>
        <Button>Add panel</Button>
      </HeadingBar>
    </>
  );
};

export default Panels;
