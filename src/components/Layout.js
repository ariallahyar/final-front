import React from "react";
import { Outlet } from "react-router-dom";
import { NavMobile, NavDesktop } from "./NavBar";
import styled from "styled-components";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

const Header = styled.header`
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

const Footer = styled.footer`
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

const Layout = () => {
  return (
    <>
      <Header className="header-container">
        <Title>Header</Title>
        {isMobile ? <NavMobile /> : <NavDesktop />}
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>© Ari Allahyar | 2022</Footer>
    </>
  );
};

export default Layout;
