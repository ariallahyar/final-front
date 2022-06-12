import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  color: rgb(0, 50, 50);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  color: rgb(0, 50, 50);
  text-decoration: none;

  @media (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterStyled = styled.footer`
  position: fixed;
  font-size: 12px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  color: rgb(0, 50, 50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyled className="header-container">
      <Title>Header</Title>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/society">Supper Society</NavLink>
      </Nav>
    </HeaderStyled>
  );
};

const Footer = () => {
  return <FooterStyled>© Ari Allahyar | 2022</FooterStyled>;
};

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
