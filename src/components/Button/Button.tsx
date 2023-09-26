import styled from "styled-components";
import { L3 } from "../../styles/typography";
import PlusSVG from "../../assets/plus.svg?react";

const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 0.375rem;
  height: 40px;
  opacity: 1;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const Text = styled(L3)`
  font-size: 10px;
  color: white;
  text-transform: uppercase;
`;

const PlusIcon = styled(PlusSVG)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  path {
    fill: white;
  }
`;

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <Wrapper>
      <PlusIcon />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Button;
