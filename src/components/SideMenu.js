import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hamburger = styled.button(
  ({ theme, isOpen }) => `
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-around;
  width: 32px;
  height: 38px;
  background: transparent;
  border: none;
  padding: 0 0 12px 0;
  z-index: 10;
  position: ${isOpen ? "fixed" : "null"};
  right: ${isOpen ? "20px" : "null"};

  div {
    width: 32px;
    height: 3px;
    background: white;
    border-radius: 1.5px;
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
`
);

const Menu = styled.li(
  ({ theme, isOpen }) => `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.textLight};
  background: ${theme.colors.backgroundDark};
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
    font-size: ${theme.fontSizes.large};
    margin: 10px 0;
  }
`
);

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <Hamburger isOpen={isOpen} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      {isOpen && (
        <Menu isOpen={isOpen} onClick={toggle}>
          <Link to="/">Discover</Link>
          <Link to="/community">Community</Link>
          <Link to="/society">Supper Society</Link>
          <Link to="/profile">Profile</Link>
        </Menu>
      )}
    </nav>
  );
};
