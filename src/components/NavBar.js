import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profileCircleIcon } from "../assets/icons";
import styled from "styled-components";

const Hamburger = styled.button(({ theme, isOpen }) =>`
  display: flex;
  justify-self: flex-end;
  flex-direction: column;
  justify-content: space-around;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;
  position: ${isOpen ? "fixed" : "null"};
  right: ${isOpen ? "20px" : "null"};

  div {
    width: 32px;
    height: 4px;
    background: ${isOpen ? theme.colors.backgroundSecondary : theme.colors.backgroundPrimary};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${isOpen ? "0" : "1"};
      transform: ${isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`);

const Menu = styled.nav(({ theme, isOpen }) => `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: white;
  background: ${theme.colors.backgroundPrimary};
  transform: ${isOpen ? "translateX(0)" : "translateX(-100%)"};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  text-align: left;
  padding: 32px;
  width: 100vw;
  height: 100vh;

  a {
    color: inherit;
    font-size: 22px;
    margin: 10px 0;
  }
`
);

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Hamburger isOpen={isOpen} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      {isOpen && (
        <Menu isOpen={isOpen} onClick={toggle}>
          <Link to="/">Home</Link>
          <Link to="/community">Community</Link>
          <Link to="/society">Supper Society</Link>
          <Link to="/profile">Profile</Link>
        </Menu>
      )}
    </>
  );
};

const Navbar = styled.nav(({ theme }) =>`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  a {
    font-size: 18px;
    letter-spacing: -0.3px;
    color: ${theme.colors.primary};

    @media (min-width: 768px) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`);

export const NavDesktop = () => {
  return (
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/community">Community</Link>
      <Link to="/society">Supper Society</Link>
      <Link to="/profile">{profileCircleIcon}</Link>
    </Navbar>
  );
};
