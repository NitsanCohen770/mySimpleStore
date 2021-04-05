import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My simple shop</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
