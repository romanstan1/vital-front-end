import styled, { css } from "styled-components";
import { useEffect } from "react";

const Wrapper = styled.div``;
const Button = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border: 1px solid grey;
  display: inline-block;
`;

const options = {
  method: "GET",
  headers: {
    "x-vital-api-key": "sk_us_xqfTe7ceyptcTDOKOF3jXRik7dBqEPnmD5cL4POFlPE",
  },
};

const BiomarkerList = () => {
  const getMarkers = () => {
    fetch("https://api.tryvital.io/v3/lab_tests/markers", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  return (
    <Wrapper>
      <Button
        onClick={() => {
          getMarkers();
        }}
      >
        Get markers
      </Button>
    </Wrapper>
  );
};

export default BiomarkerList;
