import styled, { css } from "styled-components";
import COLORS from "../../styles/colors";

const CollectionButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CollectionButton = styled.div<{ $isActive?: boolean }>`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid ${COLORS.lightGray};
  cursor: pointer;
  &:hover {
    background: ${COLORS.activeGray01};
  }
  transition: background 0.2s ease;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${COLORS.activeGray01};
    `};
`;

export enum TestKitType {
  TestKit = "Test kit",
  AtHome = "At home phlebotomy",
}

const ButtonHeader = styled.div``;

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
