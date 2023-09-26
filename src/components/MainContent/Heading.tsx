import styled from "styled-components";
import { H2, P2 } from "../../styles/typography";
import COLORS from "../../styles/colors";

const Wrapper = styled.div`
  padding: 0 0 12px 0;
  margin: 0 0 20px 0;
  border-bottom: 1px solid ${COLORS.lightGray};
  display: inline-block;
`;

const HeadingText = styled(H2)`
  margin: 0;
`;
const SubHeadingText = styled(P2)`
  margin: 8px 0 0 0;
  color: ${COLORS.midGray};
`;

interface HeadingProps {
  heading: string;
  subheading: string;
}

const Heading = ({ heading, subheading }: HeadingProps) => {
  return (
    <Wrapper>
      <HeadingText>{heading}</HeadingText>
      <SubHeadingText>{subheading}</SubHeadingText>
    </Wrapper>
  );
};

export default Heading;
