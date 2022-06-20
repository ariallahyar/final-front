import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { profileCircleIcon } from "../assets/icons";
import styled from "styled-components";

const DesktopHeader = styled.header(
  ({ theme }) => `
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  h1 {
    font-family: ${theme.fontFamily.title};
    letter-spacing: -1.0px;
    font-weight: 400;
  }

  nav {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 20px;
  }

  a {
    color: ${theme.colors.primary};
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSizes.default};
    font-weight: 500;
    letter-spacing: -0.3px;
    padding-bottom: 2px;
  }
`
);

const MobileHeader = styled.header(
  ({ theme }) => `
  color: white;
  background-color: ${theme.colors.primary};
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 60px;
  
  h1 {
    font-family: ${theme.fontFamily.title};
  }

  nav {
    display: flex;
    justify-content: flex-end;
  }
  `
);

const Footer = styled.footer(
  ({ theme }) => `
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  font-size: ${theme.fontSizes.tiny};
  color: ${theme.colors.primary};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
);

const Layout = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <MobileHeader>
          <h1>FAVOREATS</h1>
          <SideMenu />
        </MobileHeader>
      ) : (
        <DesktopHeader>
          <h1>FAVOREATS</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/society">Supper Society</Link>
            <Link to="/profile">{profileCircleIcon}</Link>
          </nav>
        </DesktopHeader>
      )}
      <main>
        <Outlet />
      </main>
      <Footer>© Ari Allahyar | 2022</Footer>
    </>
  );
};

export default Layout;
