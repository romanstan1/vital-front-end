import styled from "styled-components";
import VitalLogo from "../../assets/vital-logo.svg?react";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  width: 100%;
  display: flex;
  padding: 10px 24px;
  height: 30px;
  justify-content: flex-start;
  align-items: center;
`;

const LogoIcon = styled(VitalLogo)`
  width: 23px;
  height: 23px;
`;

const Text = styled.div`
  margin-left: 8px;
  padding-left: 4px;
  font-weight: 600;
  font-size: 20px;
`;

const Logo = () => {
  return (
    <Wrapper to="/">
      <LogoIcon />
      <Text>Vital</Text>
    </Wrapper>
  );
};

export default Logo;
