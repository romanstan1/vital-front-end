// import styled from "styled-components";
import data from "./biomarker-data.json";
import ContentHeading from "../ContentHeading";

// const Wrapper = styled.div``;

const Panels = () => {
  console.log("data", data);

  return (
    <>
      <ContentHeading
        heading="Panels"
        subheading="A list of your team's created panels"
      />
    </>
  );
};

export default Panels;
