import styled, { css } from "styled-components";
import COLORS from "../../styles/colors";
import { P2 } from "../../styles/typography";
import { TestKitType } from "../../types";

const CollectionButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 5px 0;
`;

const CollectionButton = styled.div<{ $isActive?: boolean }>`
  padding: 13px 20px;
  border-radius: 1px;
  border: 1px solid ${COLORS.lightGray};
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: ${COLORS.activeGray01};
  }
  transition: background 0.2s ease;
  ${({ $isActive }) =>
    $isActive &&
    css`
      border: 1px solid ${COLORS.activeBlue};
      background: ${COLORS.activeGray01};
    `};
`;

const ButtonHeader = styled.div`
  font-size: 16px;
`;

interface Props {
  onClick(type: TestKitType): void;
  method?: TestKitType;
}

const CollectionMethod = ({ onClick, method }: Props) => {
  return (
    <CollectionButtonWrapper>
      <CollectionButton
        onClick={() => onClick(TestKitType.TestKit)}
        $isActive={method === TestKitType.TestKit}
      >
        <ButtonHeader>{TestKitType.TestKit}</ButtonHeader>
      </CollectionButton>
      <CollectionButton
        onClick={() => onClick(TestKitType.AtHome)}
        $isActive={method === TestKitType.AtHome}
      >
        <ButtonHeader>{TestKitType.AtHome}</ButtonHeader>
      </CollectionButton>
    </CollectionButtonWrapper>
  );
};
export default CollectionMethod;
