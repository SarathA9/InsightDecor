import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// Add global font-family styling
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap');

  body {
    font-family: 'Rajdhani', sans-serif;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: 'Rajdhani', sans-serif;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; // Hide on small screens
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00ffff;
  }
`;

// Hamburger Menu
const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: background-color 0.3s ease;
  }

  &:hover div {
    background-color: #00ffff;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

function Navbar() {
  return (
    <>
      <GlobalStyle />
      <NavbarContainer>
        <Logo to="/">Insight Decor</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        <HamburgerMenu>
          <div />
          <div />
          <div />
        </HamburgerMenu>
      </NavbarContainer>
    </>
  );
}

export default Navbar;