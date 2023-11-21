// Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px;
  width: 100%;
  top: 0; /* Fixa o header no topo da tela */
  z-index: 1000; /* Certifica-se de que o header fique acima de outros elementos */
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  font-size: 18px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    color: #ffd700;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <h1 style={{ margin: 0 }}>Seu Logo ou Nome</h1>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projetos">Projetos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contatos">Contatos</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
