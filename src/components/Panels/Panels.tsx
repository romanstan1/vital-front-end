import { useState } from "react";

import styled from "styled-components";
import data from "./biomarker-data.json";
import ContentHeading from "../ContentHeading";
import Button from "../Button";
import { useModal, ModalTypes } from "../../contexts/ModalContext";

const HeadingBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

interface Marker {
  description: string;
  id: number;
  lab_id: number;
  name: string;
  price: string;
  provider_id: string | null;
  slug: string;
  type: string;
  unit: string | null;
}

interface Pagination {
  page: number;
  size: number;
  total: number;
}
interface BiomarkerData extends Pagination {
  markers: Marker[];
}

const options = {
  method: "GET",
  headers: {
    "x-vital-api-key": "sk_us_xqfTe7ceyptcTDOKOF3jXRik7dBqEPnmD5cL4POFlPE",
  },
};

const Panels = () => {
  const [bioMarkerData, setBioMarkerData] = useState<BiomarkerData>({
    page: 0,
    size: 0,
    total: 0,
    markers: [],
  });
  console.log("bioMarkerData", bioMarkerData);

  const { setModal } = useModal();

  const handleAddPanel = () => {
    fetch("https://api.sandbox.tryvital.io/v3/lab_tests/markers", options)
      .then((response) => response.json())
      .then((response) => {
        setBioMarkerData(response);
      })
      .catch(() => {
        // Since there is a CORS error when accessing the biomarker api from the FE, the biomarker data is set with mocked data on error.
        setBioMarkerData(data);
      });

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
