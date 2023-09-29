import styled from "styled-components";
import { usePanels } from "../../contexts/PanelContext";
import COLORS from "../../styles/colors";
import { P2 } from "../../styles/typography";
import BiomarkerPills from "../BiomarkerPills";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.lightGray};
  margin-top: 8px;
  border-radius: 10px;
  overflow: hidden;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 150px 180px 1fr;
  border-bottom: 1px solid ${COLORS.lightGray};

  &:nth-of-type(even) {
    background: ${COLORS.panelGray};
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

const Header = styled(Row)`
  border-bottom: 1px solid ${COLORS.lightGray};
`;

const EmptyText = styled(P2)`
  color: ${COLORS.midGray};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  padding: 20px 0;
`;

const HeadingCell = styled.div`
  padding: 12px 0px 12px 24px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  color: ${COLORS.tableGray};
  letter-spacing: 0.6px;
`;

const RowCellText = styled(P2)`
  padding: 12px 0px 12px 24px;
  font-weight: 600;
  color: ${COLORS.black};
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const RowCell = styled(P2)`
  padding: 12px 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const EmptyContent = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  padding: 20px;
`;

const Content = styled(EmptyContent)`
  padding: 0px;
`;

const PanelsTable = () => {
  const { panels } = usePanels();

  return (
    <Wrapper>
      <Header>
        <HeadingCell>Name</HeadingCell>
        <HeadingCell>Test kit type</HeadingCell>
        <HeadingCell>Biomarkers</HeadingCell>
      </Header>
      {panels.length === 0 ? (
        <EmptyContent>
          <EmptyText>You don't have any panels yet</EmptyText>
        </EmptyContent>
      ) : (
        <Content>
          {panels.map((panel, i) => {
            return (
              <Row key={panel.name + i}>
                <RowCellText>{panel.name}</RowCellText>
                <RowCellText>{panel.testKitType}</RowCellText>
                <RowCell>
                  <BiomarkerPills biomarkers={panel.markers} />
                </RowCell>
              </Row>
            );
          })}
        </Content>
      )}
    </Wrapper>
  );
};

export default PanelsTable;
