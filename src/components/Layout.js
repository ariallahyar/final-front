import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SideMenu } from "./SideMenu";
import { profileIcon } from "../assets/icons";
import styled from "styled-components";

const Container = styled.div(
  ({ theme }) => `
  width: 100%;
  background-color: ${theme.colors.backgroundDark};
  height: 56px;
  margin-bottom: 10px;
`
);

const DesktopHeader = styled.header(
  ({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr;

  h1 {
    padding-top: 2px;
    font-family: ${theme.fontFamily.title};
    color: ${theme.colors.textLight};
    letter-spacing: -1.0px;
    font-weight: 400;
  }

  nav {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 28px;

    .active{
      color: ${theme.colors.secondary};
    }
  } 
  
  a {
    color: ${theme.colors.textLight};
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSizes.default};
    font-weight: 500;
    letter-spacing: -0.3px;
    padding-bottom: 2px;
    
    &:hover {
      text-decoration: none;
      padding-top: 2px;
      border-bottom: 2px solid ${theme.colors.secondary};
    }
  }
`
);

const MobileHeader = styled.header(
  ({ theme }) => `
  color: ${theme.colors.textLight};
  background-color: ${theme.colors.backgroundDark};
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 60px;
  
  h1 {
    color: ${theme.colors.textLight};
    font-family: ${theme.fontFamily.title};
  }

  nav {
    display: flex;
    justify-content: flex-end;

    .active {
      color: ${theme.colors.secondary};
    }
  }

  a {
    color: ${theme.colors.textLight};
    font-family: ${theme.fontFamily.primary};
  }
  `
);

const Footer = styled.footer(
  ({ theme }) => `
  font-size: ${theme.fontSizes.tiny};
  color: ${theme.colors.primary};
  position: absolute;
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 100%;
  height: 40px;
  bottom: 0;
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
        <Container>
          <DesktopHeader>
            <h1>FAVOREATS</h1>
            <nav
              activestyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/community">Community</NavLink>
              <NavLink to="/society">Supper Society</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/profile">{profileIcon}</NavLink>
            </nav>
          </DesktopHeader>
        </Container>
      )}
      <main>
        <Outlet />
      </main>
      <Footer>© Ari Allahyar | 2022</Footer>
    </>
  );
};

export default Layout;
