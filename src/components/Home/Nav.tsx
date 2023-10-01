import Logo from "../Logo";

import styled from "styled-components";
import { rem } from "../../styles/typography";
import { Link } from "react-router-dom";
import CtaButton from "./CtaButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  color: white;
  position: absolute;
  top: 0;
  left: auto;
  right: auto;
  padding-right: 24px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-left: 50px;
`;

const MenuButton = styled(Link)`
  font-size: ${rem(15)};
  color: white;
  white-space: nowrap;
  border-bottom: 1px solid transparent;
  transition: 0.2s ease;
  padding: 5px 0;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <Center>
        <MenuButton to="/">Products</MenuButton>
        <MenuButton to="/">Developers</MenuButton>
        <MenuButton to="/">Pricing</MenuButton>
        <MenuButton to="/">Customers</MenuButton>
        <MenuButton to="/">About</MenuButton>
      </Center>
      <Right>
        <MenuButton to="/app">Sign in</MenuButton>
        <CtaButton to="/app">Get started</CtaButton>
      </Right>
    </Wrapper>
  );
};

export default Nav;
